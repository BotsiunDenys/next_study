import NextAuth, { Account, Profile, User } from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { User as UserModel } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt";

interface SignInParams {
  user: User;
  account: Account | null;
  profile?: Profile | undefined;
}

interface LoginCredentials {
  username: string;
  password: string;
}

const login = async (credentials: LoginCredentials) => {
  try {
    connectToDb();
    const user = await UserModel.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Wrong credentials");
    }
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Wrong credentials");
    }
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials: LoginCredentials, request) {
        try {
          const user = await login(credentials);
          return user;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn(params: SignInParams) {
      if (params.account?.provider === "github") {
        connectToDb();
        try {
          const user = await UserModel.findOne({
            email: params.profile?.email,
          });

          if (!user) {
            const newUser = new UserModel({
              username: params.profile?.login,
              email: params.profile?.email,
              img: params.profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (e) {
          console.log(e);
          return false;
        }
      }
      return true;
    },
  },
});
