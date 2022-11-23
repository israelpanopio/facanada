import React, { useEffect, useState } from 'react'
import { DiscussionComments, PostCard } from '../../components';
import { Row, TogglePageLeft } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getLatests } from '../../services';
import { FaRegHandPointLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Cntr, CategoryTitle } from '../category/[slug]';

const CategoryDetails = ({ posts, category }) => {
  const router = useRouter();

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
        <DiscussionComments />
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