import React from 'react'
import { getPosts, getPostDetails } from '../../services';
import { useRouter } from 'next/router';
import styled from 'styled-components'
import { Body, Col, SidebarNav } from '../../components/sharedstyles';
import { PostDetail, Widget } from '../../components';

const PostDetails = ({ post, slug }) => {
  const router = useRouter();

if (router.isFallback) {
  return (
    <>
    <h1>Loading...</h1>
      {/* <Loader /> */}
    </>
  )
} 

return (
    <Body>
      <Col>
        <PostDetail post={post} />
        {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
      </Col>
      <Col>
        <SidebarNav>
          <Widget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
        </SidebarNav>
      </Col>
    </Body>
    
  )
}


export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return{
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: true,
  }
}

const SocialImage = styled.img`
  display: none;
`