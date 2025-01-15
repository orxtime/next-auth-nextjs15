import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    // Credentials with mongodb here:
    // https://github.com/orxtime/next-auth-nextjs15
    //
    //
    KeycloakProvider({
      clientId: process.env.AUTH_KEYCLOAK_ID || "",
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET || "",
      issuer: process.env.AUTH_KEYCLOAK_ISSUER || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
