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
    <h2> Group Rules </h2>
    <h3>1. PLEASE MAGBASA BASA MUNA.</h3>
    <p>Utilize search🔍 button to look for the specific topic that concerns you. Matagal na tong group na to, and chances are high na nadiscuss na mismo ung question mo.</p>
    <p>People who obviously didn't even made an effort to read and search first will be banned from the group. Mababa yung success rate mo kung ayaw mo man lang mageffort. Sorry to say but we also don't want to waste our efforts on you.</p>
    <p>Please don't get me wrong, queries are still welcome. The point of this rule is para hindi paulit ulit ung topic and we'll have more time answering new questions and/or those who actually needs clarification. I highly recommend na galingan natin to improve our comprehension pero kung nag effort ka na at hirap ka talaga maintindihan, please do ask for help.</p>
    <h3>2. YOUR SAFETY IS ONE OF MY PRIORITY.</h3>
    <p>Please do report any suspicious activities. Please also report if may bad experience ka sa any agency/consultant that are regularly posting their service here.</p>
    <p>Be careful sa pagbabayad using credit card. <Link href="https://www.facebook.com/groups/cadreamers/posts/933960690915114/">Click here to see related Post</Link></p>
    <p>I will kick and block anyone na mataas ang suspicion ko about being a scammer. Even without giving them warning. We don't need to take risks. Please be careful in sharing your opinion, baka scammy pakinggan.</p>
    <h3>3. READ OUR GUIDE FIRST BEFORE ASKING FOR LEGIT CHECK.</h3>
    <p>Gustong magpalegit check? <Link href="https://www.facebook.com/groups/cadreamers/permalink/933021544342362">Click here and read our Guide First</Link></p>
    <h3>4. PLEASE STICK TO THE PURPOSE OF THIS GROUP AS MUCH AS POSSIBLE.</h3>
    <p>Focus lang tayo dito sa goal natin to go to Canada. Live selling and "business proposals" DAW is not related to this group. You'll be blocked immediately.</p>
    <h3>5. RESPECT EVERYONE</h3>
    <p>You definitely don't belong in this group if you need me to define this rule.</p>
    <p>6. PLEASE DO NOT DIRECT/PRIVATE MESSAGE US.</p>
    <p>We are not consultants nor agents. Sa dami nyo dito, we just cannot provide a one on one service. In fact we're not even legally allowed to do so. If you really need help, try to reach out to those that are in this group. As I mentioned in rule no.2, I will do my best to keep scammers out. <strong>PERO DO YOUR OWN CHECKS PA RIN.</strong> I will do my best pero I can never guarantee your safety.</p>
    <h3>7. NO SPAMMING</h3>
    <p>Just like rule no.1, as much as we don't like to see repeated posts, we also don't like to see repeated comments. I'll limit your availability to comment and/or post if found spamming.</p>
    <h3>Just like rule no.1, as much as we don't like to see repeated posts, we also don't like to see repeated comments. I'll limit your availability to comment and/or post if found spamming.</h3>
    <p>Be responsible sa sarili mo. All we can do here is share what we know. Most of us here are not professionally legel to give you advice. We're only here to share our experience and/or what we know and <strong>WHAT WE KNOW CAN AND MAY BE WRONG.</strong> So again, your application is your responsibility and no one else's.</p>
    <h3>9. PLEASE DON'T FORGET TO GIVE BACK.</h3>
    <p>Kung malaki naging tulong sayo ng members of this group. Hope you can give back and help those in need in return. Share your experience and timeline as well. Success stories are definitely a boost!!!</p>
    <p></p>
    <p>This post shall be updated from time to time.</p>
    <p>We will do our best to inform everyone when there's changes.</p>
    <p>BUT it will still be the members' responsibility to stay updated.</p>
    <p><i>Have a great day everyone!!</i></p>
    <p><i>We're hoping for the best for you and to see you in Canada.</i></p>
    <p></p>
    <p><Link href="https://www.facebook.com/groups/cadreamers/">CLICK HERE TO JOIN THE GROUP</Link></p>
    <p></p>
</>)}

