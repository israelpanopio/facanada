import React, { useState, useEffect  } from 'react'
import { NavBar, Togglebar, Footer, Coffee, ScrollToTop } from '../components';
import { Container } from './sharedstyles';
import Script from "next/script";
import Head from 'next/head'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  
  useEffect(() => {
    if(window.FB){
      window.FB.XFBML.parse();
      }
     const facebookScript = document.createElement("script");
     facebookScript.async = true;
     facebookScript.src = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=${process.env.FACEBOOK_APP_ID}&autoLogAppEvents=1`;
     document.body.appendChild(facebookScript);
  },[]);

  return (
    <>
    <Head>
      <title>Filipinos Aspirants to Canada</title>
      <meta name="Filipinos Aspirants to Canada" content="by Israel Panopio" />
      <meta name='ir-site-verification-token' value='443430322' />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Cookie&family=Noto+Sans&display=swap" rel="stylesheet" />
      <meta property="fb:app_id" content="366180864923538" />
      <meta property="fb:admins" content="empoyan"/>
    </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-31HF0Y6JYY"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-31HF0Y6JYY', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-4841621324421656"
        strategy="beforeInteractive"
        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Togglebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Container>
        {children}
      </Container>
      <Coffee />
      <ScrollToTop />
      <Footer />
      <Script type="text/javascript" src="https://s.skimresources.com/js/231084X1713494.skimlinks.js" />
    </>
  )
}

export default Layout

