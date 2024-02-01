import NextAuth, { Account, Profile, User } from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { User as UserModel } from "./models";
import { UserType } from "./types";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt";

interface SignInParams {
  user: User;
  account: Account | null;
  profile?: Profile | undefined;
}

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
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _request) {
        try {
          connectToDb();
          const user = await UserModel.findOne<UserType>({
            username: credentials.username,
          });
          if (!user) {
            throw new Error("Wrong credentials");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
          if (!isPasswordCorrect) {
            throw new Error("Wrong credentials");
          }
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
          const user = await UserModel.findOne<UserType>({
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
