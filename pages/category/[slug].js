import React, { useEffect, useState } from 'react'
import { PostCard } from '../../components';
import { Row, TogglePageRight } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getFeaturedCategoryPost } from '../../services';
import styled from 'styled-components';
import { FaRegHandPointRight } from 'react-icons/fa';
import Link from 'next/link';

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
      <TogglePageRight><Link  href={`/discussion/${category.slug}`}>Proceed to Discussions <FaRegHandPointRight /></Link></TogglePageRight>
      <Row>{posts.map((post, index ) => (
            <PostCard key={index} post={post.node} title={post.node.title} />
          ))} 
      </Row>
    </Cntr>
  )
}

export default CategoryDetails

export async function getStaticProps({ params }) {
  const posts = await getFeaturedCategoryPost(params.slug);
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

export const Cntr = styled.div`
max-width: 1100px;
min-height: 80vh;
margin: 50px auto auto auto;
background: rgba(255,255,255, 0.5);
`

export const CategoryTitle = styled.h1`
text-align: center;
border-bottom: 5px solid red;
margin-bottom: 0;
font-size: 30px;

`