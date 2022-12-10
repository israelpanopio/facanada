import React from 'react'
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { Body, Col, SidebarNav } from '../components/sharedstyles'
import { PostCard, Welcome, Widget } from '../components';
import { getFeaturedPosts } from '../services';

export default function Home({ posts, isSlug }) {
  // const [welcome, setWelcome] = useState(true);

  // const toggleWelcome = () => {
  //   setWelcome(!welcome)
  // }
  return (
    <Body>
    {/* <Welcome welcome={welcome} toggleWelcome={toggleWelcome} /> */}
      <Col>
        <h2 style={{margin:"20px 0 0 10px"}}>Welcome Aspirants! <FaCanadianMapleLeaf color={"red"} /></h2>
        <h4 style={{margin:"0 0 20px 10px"}}>Hope to see you in Canada!</h4>
        <img style={{display:"none"}} src="/logo.png" />
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))} 
      </Col>
      <Col>
        <SidebarNav>
          <Widget slug={""} categories={[]} />
        </SidebarNav>
      </Col>
    </Body>
  )
}

export async function getStaticProps() {
  const posts = (await getFeaturedPosts()) || [];

  return {
    props: { posts },
    revalidate: 1,
  };
}

