import React from 'react'
import { FaCanadianMapleLeaf, FaAngleRight } from 'react-icons/fa';
import { Body, Col, SidebarNav } from '../components/sharedstyles'
import { GoogleAds, PostCard, Welcome, Widget } from '../components';
import { getFeaturedPosts } from '../services';

export default function Home({ posts }) {
  // const [welcome, setWelcome] = useState(true);

  // const toggleWelcome = () => {
  //   setWelcome(!welcome)
  // }
  return (
    <Body>
    {/* <Welcome welcome={welcome} toggleWelcome={toggleWelcome} /> */}
      <Col>
        <h2 style={{margin:"20px 0 0 10px"}}>Welcome Aspirants! <FaCanadianMapleLeaf color={"red"} /></h2>
        <h3 style={{margin:"0 0 20px 10px"}}>Hope to see you in Canada!</h3>
        <img style={{display:"none"}} src="/logo.png" />
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))} 
        {/* <div id="ezoic-pub-ad-placeholder-123"><GoogleAds ads={""} /></div> */}
        {/* <h2>Go to Frequently Asked Questions <FaAngleRight /></h2> */}
      </Col>
      <Col>
        <Widget slug={""} categories={[]} />
        <SidebarNav>
          <div id="ezoic-pub-ad-placeholder-120"><GoogleAds ads={"items"} /></div>
        </SidebarNav>
      </Col>
    </Body>
  )
}

export async function getStaticProps() {
  const posts = (await getFeaturedPosts()) || [];

  return {
    props: { posts },
    revalidate: 3600,
  };
}

