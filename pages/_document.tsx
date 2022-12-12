import Document, { DocumentContext } from 'next/document'
import Head from 'next/head'
import Script from 'next/script'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <Head>
                  <meta name="Filipinos Aspiring to Canada" content="by Israel Panopio" />
                  <link rel="icon" href="/favicon.ico" />
                  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>
                  <meta property="fb:app_id" content="366180864923538" />
                  <meta property="fb:admins" content="empoyan"/>
                </Head>
                <App {...props} />
              </>),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }
}
