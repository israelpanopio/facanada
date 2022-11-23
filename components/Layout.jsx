import React, { useState } from 'react'
import Head from 'next/head';
import { NavBar, Togglebar } from '../components';
import { Container } from './sharedstyles';
import Script from "next/script";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-4841621324421656"
        strategy="beforeInteractive"
        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Head>
        <title>Filipinos Aspiring to Canada</title>
        <meta name="Filipinos Aspiring to Canada" content="by Israel Panopio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>
        <meta property="fb:app_id" content="366180864923538" />
        <meta property="fb:admins" content="empoyan"/>
      </Head>
      <Togglebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout

