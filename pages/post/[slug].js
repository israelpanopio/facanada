import React, { useState }  from 'react'
import { getPosts, getPostDetails } from '../../services';
import { useRouter } from 'next/router';
import styled from 'styled-components'
import { Body, Col, SidebarNav } from '../../components/sharedstyles';
import { GoogleAds, MobileSocial, PostDetail, Widget } from '../../components';
import Head from 'next/head'

const PostDetails = ({ post }) => {
  const router = useRouter();

if (router.isFallback) {
  return (
    <>
    <h1>Loading...</h1>
    </>
  )
} 

return (<>
  <Head>
    <title>{post.title}</title>
  </Head>
    <Body>
      <Col>
        <MobileDiv />
        <PostDetail post={post} />
      </Col>
      <Col>
        <SidebarNav>
          <Widget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
        </SidebarNav>
      </Col>
      <MobileSocial slug={post.slug} />
    </Body>
    </>
  )
}


export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return{
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    // paths: [
    //   {
    //     params: { slug: 'pangarap-ko-talagang-makapag-canada'}
    //   }
    // ],
    fallback: true,
  }
}

const SocialImage = styled.img`
  display: none;
`

const Comments = styled.div`
  bottom: 0;
  height: auto;
  opacity: ${({ openMobileComments }) => (openMobileComments ? '100%' : '0')};
  display:  ${({ openMobileComments }) => (openMobileComments ? 'block' : 'none')};
  @media screen and (min-width: 900px) {
  display: none;
}
`

const MobileDiv = styled.div`
  height: 10px;
  display: block;
  
  @media screen and (min-width: 900px) {
  height: 25px;
`