import Link from 'next/link'
import { Body, Col, SidebarNav, TogglePageLeft } from '../components/sharedstyles';
import { CategoryTitle } from './category/[slug]';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Widget } from '../components';
import Script from "next/script";

export default function About() {
  function refreshPage() {
    window.location.reload();
 }
  return (
    <Body>
      <Col>
        <CategoryTitle>About Us</CategoryTitle>
        <TogglePageLeft><Link  href="/"><FaRegHandPointLeft /> Back to Home</Link></TogglePageLeft>
        <AboutUs />
          <div className="fb-comments" data-href="https://www.ph2canada.com/about" data-width="800" data-numposts="5"></div>
       <p>Can't see the comment's section? <button onClick={refreshPage}>Click me to reload!</button></p>
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
  <p>We started as small <Link href="https://www.facebook.com/groups/cadreamers/">facebook group</Link> and as our group grow larger, it becomes difficult to manage, specially when 
  the most common questions are asked over and over again. So we created this website to organize the topics discussed in our group. In this way, Filipino Aspirants can reffer to them with ease.</p>
    <p>Interested in joining our Group?</p>
    <p>Please take the time to read our rules. Click on the link at the bottom to request to join</p>
    <p><i>Have a great day everyone!!</i></p>
    <p><i>We're hoping for the best for you and to see you in Canada.</i></p>
    <p></p>
    <p><Link href="https://www.facebook.com/groups/cadreamers/">CLICK HERE TO JOIN THE GROUP</Link></p>
    <p></p>
</>)}

