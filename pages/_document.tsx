import Document, { DocumentContext } from 'next/document'
import Head from 'next/head'
import { ServerStyleSheet } from 'styled-components'
import Script from "next/script";

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
                  <title>Filipinos Aspirants to Canada</title>
                  <meta name="Filipinos Aspirants to Canada" content="by Israel Panopio" />
                  <link rel="icon" href="/favicon.ico" />
                  <link href="https://fonts.googleapis.com/css2?family=Cookie&family=Noto+Sans&display=swap" rel="stylesheet" />
                  <meta property="fb:app_id" content="366180864923538" />
                  <meta property="fb:admins" content="empoyan"/>
                  <Script 
                    data-name="BMC-Widget" 
                    data-cfasync="false" 
                    src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
                    data-id="israelpanopio" 
                    data-description="Support me on Buy me a coffee!" 
                    data-message="Hello! I hope you found valuable information in this website.You want to buy me a coffee?That's perfect for this weather! I really appreciate it!" 
                    data-color="#ff813f" data-position="Right" data-x_margin="18" data-y_margin="18"></Script>
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
