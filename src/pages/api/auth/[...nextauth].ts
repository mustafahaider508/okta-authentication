import NextAuth from "next-auth";
import Okta from "next-auth/providers/okta";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Okta({
      clientId: process.env.OKTA_CLIENTID as string,
      clientSecret: process.env.CLIENT_SECERET as string,
      issuer: process.env.OKTA_DOMAIN as string,
    }),
  ],
  secret: process.env.SECERT as string,
};

//commenting for github push

export default NextAuth(authOptions);
