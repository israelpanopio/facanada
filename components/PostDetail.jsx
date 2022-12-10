import React from 'react'
import { RichText } from "@graphcms/rich-text-react-renderer";
import styled from 'styled-components'
import moment from 'moment';
import { Author } from './sharedstyles';
import { FaCalendarWeek } from 'react-icons/fa';
import { GoogleAds, InFeedAds } from '../components';

const PostDetail = ({ post }) => {

  return (
    <Post>
    <InFeedAds />        
      <FeaturedImage src={post.featuredImage.url} />
      <Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author>  
      <h1>{post.title}</h1>
      <RichText content={post.content.raw.children} />
        {post.content2 ? 
          <>
          <InFeedAds />  
          <RichText content={post.content2.raw.children} />
          </> 
        : ''}
        {post.content3 ? 
          <>
          <InFeedAds />  
          <RichText content={post.content3.raw.children} />
          </> 
        : ''}
        {post.content4 ? 
          <>
          <InFeedAds />  
          <RichText content={post.content4.raw.children} />
          </> 
        : ''}
        <GoogleAds />
    </Post>
  )
}

export default PostDetail

const Post = styled.div`
  @media screen and (max-width: 900px) {
    max-width: 96vw;
    margin: auto auto auto 2vw;
    overflow-wrap: break-word;
    word-wrap: break-word;
}
`

const FeaturedImage = styled.img`
display: block;
margin: 0.5rem auto ;
display: center;
max-width: 95%;

    @media (orientation: landscape) {
        max-height: 50vh;
    }

    @media (orientation: portrait) {
        max-height: 90vh;
        
    }
`