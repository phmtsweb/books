import { env } from '@/env'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import PrismaAdapter from '@/lib/auth/prisma-adapter'
import { NextApiRequest, NextApiResponse } from 'next'

export const buildAuthOptions = (
  req: NextApiRequest,
  res: NextApiResponse,
): NextAuthOptions => ({
  adapter: PrismaAdapter(req, res),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn() {
      return '/inicio'
    },
  },
})

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildAuthOptions(req, res))
}
