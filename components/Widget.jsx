import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services'
import { WidgetCard, GoogleAds, DesktopSocial, DesktopAds, DesktopComments } from '../components';

const Widget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [similarPosts, setSimilarPosts] = useState([]);
  const [openComments, setOpenComments] = useState(true);

  const toggleComments = () => {
    setOpenComments(!openComments);
  }
  
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);


  return (<Div>
    {slug ? <HideAds><DesktopAds /></HideAds> : ''}
      <Sidebar>
      {slug ? <DesktopComments slug={slug} openComments={openComments} /> : ''}
        <RelatedPosts openComments={openComments}>
          <h2>{slug ? 'Related Posts' : 'Recent Posts'}</h2>
          <Items slug={slug}>
            {relatedPosts.map((post, index ) => (
              <WidgetCard key={index} post={post} title={post.title} />
            ))}
            {slug ? <GoogleAds /> : ''}
          </Items>
        </RelatedPosts>
      </Sidebar>
    <DesktopSocial slug={slug} openComments={openComments} toggleComments={toggleComments} /></Div>
  )
}

export default Widget

const Div = styled.div`
  margin:0;
  padding:0;
`

const Sidebar = styled.nav`
  margin-top: 0;
  z-index: 5;
  height:  ${({ slug }) => (slug ? '70vh' : `calc(100vh - 60px)`)};
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 900px) {
  overflow: visible;
  }
`

const Items = styled.div`
      overflow: visible;
}
`

const RelatedPosts = styled.div`
  ${'' /* display:  ${({ openComments }) => (openComments ? 'none' : 'block')}; */}
`

const WidgetImage = styled(Link)`
padding-top: 130%;
width: 100%;
background-size: cover;
background-position: center;
float: left;   
`

export const NavLink = styled(Link)`
color: #e3a81e;
display: flex;
align-items: center;
font-size: 1rem;
text-decoration: none;
margin-top: 0;
padding-top: 0rem;
padding-left: 0.2rem;
cursor: pointer;

&:hover {
background-color: #fff;
color: #000;
transition: 0.2s ease-in-out;
background-color: white;
}
`

const HideAds = styled.div`
    @media screen and (max-width: 900px) {
    display: none;
}
`