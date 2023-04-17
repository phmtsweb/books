import * as z from 'zod'

export const envSchema = z.object({
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_CALLBACK_URL: z.string(),
})

export type Env = z.infer<typeof envSchema>

export const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  throw new Error('Invalid environment variables')
}

export const env = _env.data
