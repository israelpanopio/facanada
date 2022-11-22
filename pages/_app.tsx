import type { AppProps } from 'next/app'
import GlobalStyle from '../components/globalstyles'
import { Layout } from '../components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
