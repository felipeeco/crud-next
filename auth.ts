import { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';

export const authOptions:NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? '',
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? ''
    })
  ]
}