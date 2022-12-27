import React, { useState, useEffect  } from 'react'
import { NavBar, Togglebar, Footer, Coffee, ScrollToTop } from '../components';
import { Container } from './sharedstyles';
import Script from "next/script";

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
    </>
  )
}

export default Layout

