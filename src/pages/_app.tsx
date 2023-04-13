import { AppWrapper } from '@/components/AppWrapper'
import { FontsWrapper } from '@/components/FontsWrapper'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <FontsWrapper font={nunito}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </FontsWrapper>
    </SessionProvider>
  )
}
