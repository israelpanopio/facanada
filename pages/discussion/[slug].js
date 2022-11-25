import React, { useEffect, useState } from 'react'
import { DiscussionComments, GoogleAds, PostCard } from '../../components';
import { Row, TogglePageLeft } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getLatests } from '../../services';
import { FaRegHandPointLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Cntr, CategoryTitle } from '../category/[slug]';

const CategoryDetails = ({ posts, category }) => {
  const router = useRouter();
  function refreshPage() {
    window.location.reload(false);
  }

if (router.isFallback) {
  return (
    <h1>Loading...</h1>
  )
} 

return (
    <Cntr>
        <CategoryTitle>{category.name}</CategoryTitle>
      <TogglePageLeft><Link  href={`/category/${category.slug}`}><FaRegHandPointLeft /> Back to Featured Posts</Link></TogglePageLeft>
        <Row>{posts.map((post, index ) => (
              <PostCard key={index} post={post.node} title={post.node.title} />
            ))} 
        </Row>
        <GoogleAds />
          <div id="fb-root"></div>
          <p>Can't find what you're looking for? Let's discuss in the comments section below.</p>
          <div className="fb-comments" data-href={`https://www.ph2canada.com/discussion/${category.slug}`} data-width="100%" data-numposts="1"></div>
          <p>Can't see the comments? <button onClick={refreshPage}>Click me to reload!</button> Comment section should appear on top</p>
    </Cntr>
  )
}

export default CategoryDetails

export async function getStaticProps({ params }) {
  const posts = await getLatests(params.slug);
  const theCategories = await getCategories();

  return {
    props: { 
      posts,
      category: theCategories.find((({ slug }) => slug === params.slug )) },
      revalidate: 1,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}