import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div style={{marginTop:"20px"}}>
    <div style={{borderBottom:"3px solid black"}}></div>
    <FooterDiv>
      <p></p>
      <FooterNote>© Filipino Aspirants All Rights Reserved 2023</FooterNote>
      <p></p>
      <FooterNote><a style={{textDecoration:"none"}} href="/contact">Contact Me</a> | <FooterLink href="/privacy-policy">Privacy Policy</FooterLink> | <FooterLink href="/sitemap.xml">Sitemap</FooterLink></FooterNote>
      <br />
      <p></p>
    </FooterDiv>

      <i style={{fontSize:"13px"}}>
        The information in this page is copyright protected and you can't use them for any profitable use. 
        Please also note that I am a one man team working on this page. 
        It may be possible that the information in this website is outdated or maybe not accurate anymore. 
        You can find a date at the bottom right corner of the featured image. 
        That's the date of the last update and that's the best way to tell how accurate the information in this website is.
        Even with that being said, I am in NO way legally licensed to give you immigration advice. 
        Everything that is written in this website is purely based on my opinion and experience only.
        You are responsible for your own decisions.
        ALSO: I will highly appreciate it if you can help me with the updates by leaving a comment. Hope to see you in Canada!
      </i>
  </div>
  )
}

export default Footer

const FooterDiv = styled.div`
  margin: auto;
  text-align: center;
  width: 50%;
`

const FooterNote = styled.div`
  font-size: 18px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
`