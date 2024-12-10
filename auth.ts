import { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./authPrisma";

export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? '',
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? ''
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async signIn(/* {user, account, profile, email, credentials} */) {
      return true;
    },
    async jwt({token, /* user, account, profile */}) {
      const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } });
      token.roles = dbUser?.roles ?? ['Client'];
      token.id = dbUser?.id ?? 'no-uuid';
      return token
    },
    async session({session, token, /*  user */}) {
      if ( session && session.user ) {
        session.user.roles = token.roles;
        session.user.id = token.id;
      }
      return session
    }
  }
}