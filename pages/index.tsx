import React, { useState } from 'react'
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { Body, Col, SidebarNav } from '../components/sharedstyles'
import { FeaturedPosts, PostCard, Welcome, Widget } from '../components';
import { getFeaturedPosts, getPostCards } from '../services';

export default function Home({ posts }) {
  // const [welcome, setWelcome] = useState(true);

  // const toggleWelcome = () => {
  //   setWelcome(!welcome)
  // }
  return (
    <Body>
    {/* <Welcome welcome={welcome} toggleWelcome={toggleWelcome} /> */}
      <Col>
        <h1>Good Luck Aspirants!!! <FaCanadianMapleLeaf color={"red"} /></h1>
        <h3>Hope to see you soon in Canada!</h3>
          {/* <FeaturedPosts /> */}
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
  };
}

