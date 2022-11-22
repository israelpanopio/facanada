import React, { useEffect, useState } from 'react'
import { PostCard } from '../../components';
import { Row } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPost, getNews } from '../../services';
import styled from 'styled-components'

const CategoryDetails = ({ posts, news, category }) => {
  const router = useRouter();

  const [ allPosts, setAllPosts ] = useState([])

  
  useEffect(() => {
    if (category.name === "News") {
      setAllPosts(news);
    } else {
      setAllPosts(posts);
    }}, [posts]);

if (router.isFallback) {
  return (
    <>
    <h1>Loading...</h1>
      {/* <Loader /> */}
    </>
  )
} 

return (
    <Cntr>
        <CategoryTitle>{category.name}</CategoryTitle>
        <Row>{allPosts.map((post, index ) => (
              <PostCard key={index} post={post.node} title={post.node.title} />
            ))} 
        </Row>
    </Cntr>
  )
}

export default CategoryDetails

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const news = await getNews(params.slug);
  const theCategories = await getCategories();

  return {
    props: { 
      posts,
      news,
      category: theCategories.find((({ slug }) => slug === params.slug )) },
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

const CategoryTitle = styled.h1`
text-align: center;
border-bottom: 5px solid red;
font-size: 30px;

`