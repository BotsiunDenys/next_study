import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt(params: any) {
      if (params.user) {
        params.token.id = params.user.id;
        params.token.isAdmin = params.user.isAdmin;
      }

      return params.token;
    },

    async session(params: any) {
      if (params.token) {
        params.session.user.id = params.token.id;
        params.session.user.isAdmin = params.token.isAdmin;
      }

      return params.session;
    },
    authorized({ auth, request }: { auth: any; request: any }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      if (isOnBlogPage && !user) {
        return false;
      }

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
