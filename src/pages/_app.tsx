import { FontsWrapper } from '@/components/FontsWrapper'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FontsWrapper font={nunito}>
      <Component {...pageProps} />
    </FontsWrapper>
  )
}
