import React, { useState }  from 'react'
import { getPosts, getPostDetails } from '../../services';
import { useRouter } from 'next/router';
import styled from 'styled-components'
import { Body, Col, SidebarNav } from '../../components/sharedstyles';
import { MobileSocial, PostDetail, Widget } from '../../components';
import { animateScroll as scroll } from 'react-scroll'

const PostDetails = ({ post }) => {
  const router = useRouter();
  const [openMobileComments, setOpenMobileComments] = useState(false);

  const toggleMobileComments = () => {
    setOpenMobileComments(!openMobileComments)
    scroll.scrollToTop();
  }

  function refreshPage() {
    window.location.reload(false);
  }

if (router.isFallback) {
  return (
    <>
    <h1>Loading...</h1>
      {/* <Loader /> */}
    </>
  )
} 

return (<>
    <Body>
      <Col>
        <Comments openMobileComments={openMobileComments}>
          <div id="fb-root"></div>
          <div className="fb-comments" data-href={`https://www.ph2canada.com/post/${post.slug}`} data-width="100%" data-numposts="1"></div>
          <p>Can't see the comments? <button onClick={refreshPage}>Click me to reload!</button></p>
        </Comments>
        <PostDetail post={post} />
        {/* <AdjacentPosts slug={post.slug} publishedAt={post.publishedAt} /> */}
      </Col>
      <Col>
        <SidebarNav>
          <Widget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
        </SidebarNav>
      </Col>
      <MobileSocial slug={post.slug} toggleMobileComments={toggleMobileComments} openMobileComments={openMobileComments} />
    </Body>
    </>
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

const Comments = styled.div`
  bottom: 0;
  height: auto;
  opacity: ${({ openMobileComments }) => (openMobileComments ? '100%' : '0')};
  display:  ${({ openMobileComments }) => (openMobileComments ? 'block' : 'none')};
`