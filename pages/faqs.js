import React from 'react'
import { Body, Col, SidebarNav } from '../components/sharedstyles'
import { Widget } from '../components';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

const Faqs = () => {
  return (    
    <Body>
      <Col>
        <img style={{display:"none"}} src="/logo.png" />
        <br />
        <h1 style={{margin:"20px 0 0 10px"}}>Frequently Asked Questions (FAQs)</h1>
        <br />
        <p>After reading our guides, I know you might still have lots of questions in mind. But with the increasing number of Filipinos aspiring to migrate to Canada, it is most likely that the question you have have been asked by someone before. Hence, I created this page to compile all those Frequently Asked Questions or feel free to browse for all the topics discussed as well.</p>
        {/* <h2 style={{margin:"0 0 20px 10px"}}>Which pathway do you have questions for?</h2> */}
        <ul>
          {/* <li>Visit / Tourist</li>
            <ul>
              <li><a href="/post/visit-tour">See Frequently Asked Questions</a></li>
              <li><a href={`/discussion/visit?page=1`}>Sea List of all the discussed Topics</a></li>
            </ul>
          <li>Student</li>
            <ul>
              <li><a href="/post/student-permit">See Frequently Asked Questions</a></li>
              <li><a href={`/discussion/study?page=1`}>Sea List of all the discussed Topics</a></li>
            </ul> */}
          <li>Work</li>
            <ul>
              <li><a href="/post/work-permit">See Frequently Asked Questions</a></li>
              <li><a href={`/discussion/work?page=1`}>Sea List of all the discussed Topics</a></li>
            </ul>
          {/* <li>Permanent Residence</li>
            <ul>
              <li><a href="/post/permanent-residence">See Frequently Asked Questions</a></li>
              <li><a href={`/discussion/permanent-residence?page=1`}>Sea List of all the discussed Topics</a></li>
            </ul> */}
        </ul>
        <br />
        <p>If you were not able to find the answer that you are looking for, feel free to <a>join our group</a> and ask our community. Please be clear and precise with your question and we're more than willing to help you out. Please don't also forget to follow the rules.</p>
        <h2>Good luck with your journey and hope to see you in Canada soon! <FaCanadianMapleLeaf color={"red"} /></h2>
      </Col>
      <Col>
        <SidebarNav>
          <Widget slug={""} categories={[]} />
        </SidebarNav>
      </Col>
    </Body>
  )
}

export default Faqs