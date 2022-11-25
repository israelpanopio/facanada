import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services'
import { WidgetCard, InFeedAds, DesktopSocial, DesktopAds, DesktopComments } from '../components';

const Widget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [openComments, setOpenComments] = useState(true);
  const [comm, setComm] = useState('');

  const toggleComments = () => {
    // window.location.reload(false);
    // document.querySelector('#comments').load(location.href + " #comments");
    // if (document.querySelector("#fb-root") == [<div id="fb-root"></div>]) {
    //     console.log("yes");
    // } else {
    //   console.log(document.querySelector("#fb-root"));
    // // }
    // setComm(document.querySelector("#comments"));
    // console.log(comm.innerHTML);
    // router.reload(document.querySelector("#comments"))
  }

  const closeComment = () => {
    setOpenComments(false);
  }
  function refreshPage() {
    window.location.reload(false);
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

    <HideAds><DesktopAds /></HideAds>
      <SidebarNav>
      {slug ? <DesktopComments slug={slug} openComments={openComments} refreshPage={refreshPage} /> : ''}
        <RelatedPosts openComments={openComments}>
          <h2>{slug ? 'Related Posts' : 'Recent Posts'}</h2>
          <Items slug={slug}>
            {relatedPosts.map((post, index ) => (
              <WidgetCard key={index} post={post} title={post.title} />
            ))}
            <InFeedAds />
          </Items>
        </RelatedPosts>
      </SidebarNav>
    <DesktopSocial slug={slug} openComments={openComments} toggleComments={toggleComments} closeComment={closeComment}/></Div>
  )
}

export default Widget

const Div = styled.div`
  margin:0;
  padding:0;
`
const Comments = styled.div`
  bottom: 0;
  opacity: ${({ openComments }) => (openComments ? '100%' : '0')};
  display:  ${({ openComments }) => (openComments ? 'block' : 'none')};
`

const SidebarNav = styled.nav`
    margin-top: 0;
    z-index: 5;
    height:  ${({ slug }) => (slug ? '70vh' : '76vh')};
    overflow-y: scroll;
    overflow-x: hidden;
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