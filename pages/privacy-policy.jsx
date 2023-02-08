import Link from 'next/link'
import { Body, Col, SidebarNav, TogglePageLeft } from '../components/sharedstyles';
import { CategoryTitle } from './category/[slug]';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Widget } from '../components';

export default function About() {
  return (
    <Body>
      <Col>
        <CategoryTitle>Privacy Policy</CategoryTitle>
        <TogglePageLeft><Link  href="/"><u><FaRegHandPointLeft /> Back to Home</u></Link></TogglePageLeft>
        <Content />
      </Col>
      <Col>
        <SidebarNav>
          <Widget slug={""} categories={[]} />
        </SidebarNav>
      </Col>
    </Body>
  )
}

const Content = () => {
  return (<>
  <p>Effective date: December 01, 2022</p>
  <p>Filipino Aspirants to Canada (“us”, “we”, or “our”) operates the https://ph2canada.com/ website (the “Service”).</p>
  <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
  <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://ph2canada.com/</p>
  
  <h1>Use of Data</h1>
  <h3>Filipino Aspirants to Canada uses the collected data for various purposes:</h3>
  <ul>
    <li>To provide and maintain the Service</li>
    <li>To notify you about changes to our Service</li>
    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
    <li>To provide customer care and support</li>
    <li>To provide analysis or valuable information so that we can improve the Service</li>
    <li>To monitor the usage of the Service</li>
    <li>To detect, prevent and address technical issues</li>
  </ul>

  <h1>Transfer Of Data</h1>
  <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
  <p>If you are located outside Philippines and choose to provide information to us, please note that we transfer the data, including Personal Data, to Philippines and process it there.</p>
  <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
  <p>The Filipino Aspirants to Canada will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy</p>
  <p>Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
  
  <h1>Disclosure Of Data</h1>
  <h3>Legal Requirements</h3>
  <p>Filipino Aspirants to Canada may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
  <ul>
    <li>To comply with a legal obligation</li>
    <li>To protect and defend the rights or property of Filipino Aspirants to Canada</li>
    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
    <li>To protect the personal safety of users of the Service or the public</li>
    <li>To protect against legal liability</li>
  </ul>

  <h1>Security Of Data</h1>
  <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
  
  <h1>Service Providers</h1>
  <p>We may employ third party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
  <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
  <h3>Analytics</h3>
  <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
  <ul>
    <li>Google AnalyticsGoogle Analytics is a web analytics service. You can visit their Privacy Policy page here: https://policies.google.com/ </li>
  </ul>

  <h1>Links To Other Sites</h1>
  <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
  <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
  
  <h1>Children’s Privacy</h1>
  <p>Our Service does not address anyone under the age of 18 (“Children”).</p>
  <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
  
  <h1>Changes To This Privacy Policy</h1>
  <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
  <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.</p>
  <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
  
  <h1>Contact Us</h1>
  <p>If you have any questions about this Privacy Policy, please contact us:</p>
    <p><u style={{textDecoration: "none"}}><a href="/contact">Contact Me</a></u></p>
</>)}

