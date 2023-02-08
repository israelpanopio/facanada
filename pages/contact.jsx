import React from 'react'
import Link from 'next/link'
import { Body, Col, SidebarNav, TogglePageLeft } from '../components/sharedstyles';
import { CategoryTitle } from './category/[slug]';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Widget } from '../components';

const ContactMe = () => {
  return (
    <Body>
      <Col>
        <img style={{display:"none"}} src="/logo.png" />
        <CategoryTitle>Contact Me</CategoryTitle>
        <TogglePageLeft><Link  href="/"><FaRegHandPointLeft /> Back to Home</Link></TogglePageLeft>
        <p>Feel free to say "Hi!" and don't be shy!</p>
        <p>Unfortunately, as of this moment, I don't like to disclose my private contact information. But you can leave me a message by joining our group.</p>
        <p><u style={{textDecoration: "none"}}><Link href="https://www.facebook.com/groups/cadreamers/">Join Filipino Aspirants to Canada</Link></u></p>
        <p>Or you may also leave a comment available below and in every article.</p>
        <p>Leave your feedbacks, suggestions or if you are interested to work with me! I would love to hear from you!</p>
        
        <div id="comments">
          <div id="fb-root"></div>
          <div className="fb-comments" data-href="https://www.ph2canada.com/contact"  data-width="100%" data-numposts="1"></div>
        </div>
      </Col>
      <Col>
        <SidebarNav>
          <Widget slug={""} categories={[]} />
        </SidebarNav>
      </Col>
    </Body>
  )
}

export default ContactMe