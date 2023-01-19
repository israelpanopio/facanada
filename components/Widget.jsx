import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services'
import { WidgetCard, DesktopSocial, DesktopComments, GoogleAds } from '../components';

const Widget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    if (slug && slug !== "pangarap-ko-talagang-makapag-canada") {
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
    <HideAds>{slug ? <GoogleAds ads={"top"} /> : ''}</HideAds>
      <Sidebar slug={slug} >
      {slug ? <DesktopComments slug={slug} /> : ''}
        <RelatedPosts>
          <h2>{slug ? 'Related Posts' : 'Recent Posts'}</h2>
            {relatedPosts.slice(0, 2).map((post, index ) => (<>
              <WidgetCard key={index} post={post} title={post.title} />
              </>))}
              <GoogleAds ads={"infeed"} />
              
            {relatedPosts.slice(2, 4).map((post, index ) => (<>
              <WidgetCard key={index} post={post} title={post.title} />
              </>))}
              {!slug ? <GoogleAds ads={"infeed"} /> : ''}

              {relatedPosts.slice(4, 6).map((post, index ) => (<>
              <WidgetCard key={index} post={post} title={post.title} />
              </>))}
              <GoogleAds />
        </RelatedPosts>
      </Sidebar>
  </Div>
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
  height: ${({ slug }) => (slug ?  'calc(100vh - 80px - 15vh)' : `calc(100vh - 80px)`)};
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 900px) {
    overflow: visible;
    height: auto;
  }
  
  &::-webkit-scrollbar {
      width: 6px;               /* width of the entire scrollbar */
    }
    
  &::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
  }
    
  &::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 20px;       /* roundness of the scroll thumb */
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