import React, { useState, useEffect } from 'react'
import { DiscussionCard } from '../components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Cntr, CategoryTitle, Page, Pages, PageLink } from '../pages/category/[slug]';
import { getPosts } from '../services';

const DiscussionDetails = ({ posts }) => {
    const router = useRouter();

  if (router.isFallback) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <Cntr>
    <img style={{display:"none"}} src="/logo.png" />
      <CategoryTitle>All Topics</CategoryTitle>
      {posts.map((post, index) => (
        <DiscussionCard key={index} post={post.node} title={post.node.title} />
      ))}
    </Cntr>
  )
}

export default DiscussionDetails

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts: posts
    },
    revalidate: 3600,
  };
}

