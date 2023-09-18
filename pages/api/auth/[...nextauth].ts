import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.WEB_CLIENT_ID!,
      clientSecret: process.env.WEB_CLIENT_KEY!,
    }),
  ],

  callbacks: {
    async session({ session, token, user }: any) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },

  secret: "mnbvcxzasdfghjklpoiuytrewq1000",
};

export default NextAuth(authOption);