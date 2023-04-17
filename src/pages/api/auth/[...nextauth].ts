import { env } from '@/env'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider, { GithubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
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
      profile: (profile: GithubProfile) => {
        return {
          id: String(profile.id),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile: (profile: GoogleProfile) => {
        // console.log(profile)
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return { ...session, user }
    },
  },
})

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildAuthOptions(req, res))
}
