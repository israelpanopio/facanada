import React, { useState, useEffect  } from 'react'
import { NavBar, Togglebar, Footer } from '../components';
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
    //  console.log(window.FB)
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
      {/* <Script
        id="fb-root" 
        async defer crossorigin="anonymous" 
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0&appId=366180864923538&autoLogAppEvents=1"
        nonce="bEwmLXkc"
        lazy="false"
      /> */}
      <Togglebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout

