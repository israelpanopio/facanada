import Link from 'next/link'
import { Body, Col, SidebarNav, TogglePageLeft } from '../components/sharedstyles';
import { CategoryTitle } from './category/[slug]';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Widget } from '../components';

export default function About() {
  function refreshPage() {
    window.location.reload();
 }
  return (
    <Body>
      <Col>
        <img style={{display:"none"}} src="/logo.png" />
        <CategoryTitle>About Us</CategoryTitle>
        <TogglePageLeft><Link  href="/"><FaRegHandPointLeft /> Back to Home</Link></TogglePageLeft>
        <AboutUs />
      </Col>
      <Col>
        <SidebarNav>
          <Widget slug={""} categories={[]} />
        </SidebarNav>
      </Col>
    </Body>
  )
}


function Comments() {
  
  return(<>
  </>)
} 

const AboutUs = () => {
  return (<>
  <p>We started as small <Link href="https://www.facebook.com/groups/cadreamers/">facebook group</Link> and as our group grow bigger, it becomes difficult to manage, specially when 
  the most common questions are asked over and over again. So we created this website to organize the topics discussed in our group. In this way, Filipino Aspirants can reffer to them with ease.</p>
    <p>Interested in joining our Group?</p>
    <p><u style={{textDecoration: "none"}}><Link href="https://www.facebook.com/groups/cadreamers/">Join Filipino Aspirants to Canada</Link></u></p>
    <p></p>
    <p>Please take the time to read our rules.</p>
    <p>Have a great day everyone!!!</p>
    <p>We're hoping for the best for you and to see you in Canada.</p>
</>)}

