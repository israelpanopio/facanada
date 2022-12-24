import React, { useState }  from 'react'
import { getPostDetails, getFaqs } from '../../services';
import { useRouter } from 'next/router';
import styled from 'styled-components'
import { Body, Col, SidebarNav } from '../../components/sharedstyles';
import { MobileSocial, PostDetail, Widget } from '../../components';
import { animateScroll as scroll } from 'react-scroll'

const FaqsDetail = ({ post }) => {
  const router = useRouter();
  const [openMobileComments, setOpenMobileComments] = useState(false);
  console.log(post.slug);

  const toggleMobileComments = () => {
    setOpenMobileComments(!openMobileComments)
    scroll.scrollToTop();
  }

if (router.isFallback) {
  return (
    <>
    <h1>Loading...</h1>
    </>
  )
} 

return (<>
    <Body>
      <Col>
        <Comments openMobileComments={openMobileComments}>
          <div id="fb-root"></div>
          <div className="fb-comments" data-href={`https://www.ph2canada.com/${post.slug}`} data-width="100%" data-numposts="1"></div>
        </Comments>
        <PostDetail post={post} />
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


export default FaqsDetail

export async function getStaticProps({ params }) {
  const data = await getPostDetails(`faqs/${params.slug}`);

  return {
    props: { post: data },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const posts = await getFaqs();

  return{
    paths: [
      // {
      //   params: { slug: 'visit-tour'}
      // },
      // {
      //   params: { slug: 'student-permit'}
      // },
      // {
      //   params: { slug: 'permanent-residence'}
      // },
      {
        params: { slug: 'work-permit'}
      }
    ],
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