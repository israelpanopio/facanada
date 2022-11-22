import React, { useState } from 'react'
import Head from 'next/head';
import { NavBar, Togglebar } from '../components';
import { Body, Col, Container, SidebarNav } from './sharedstyles';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Head>
        <title>Filipinos Aspiring to Canada</title>
        <meta name="Filipinos Aspiring to Canada" content="by Israel Panopio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>
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

