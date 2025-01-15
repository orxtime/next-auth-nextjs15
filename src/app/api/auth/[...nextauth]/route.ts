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
      clientId: process.env.AUTH_KEYCLOAK_ID || "dir-app",
      clientSecret:
        process.env.AUTH_KEYCLOAK_SECRET || "I62liBln3PeAUeoWBU20RdzEvmMHBeVP",
      issuer:
        process.env.AUTH_KEYCLOAK_ISSUER ||
        "http://192.186.5.55:8080/realms/br30",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: "/",
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
