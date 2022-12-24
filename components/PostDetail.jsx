import React from 'react'
import { RichText } from "@graphcms/rich-text-react-renderer";
import styled from 'styled-components'
import moment from 'moment';
import { Author } from './sharedstyles';
import { FaCalendarWeek, FaAngleRight } from 'react-icons/fa';
import { DesktopAds, GoogleAds, InFeedAds } from '../components';
import Link from 'next/link';

const PostDetail = ({ post }) => {

  return (
    <Post>
    <DesktopAds />        
      <FeaturedImage src={post.featuredImage.url} />
      <Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author>  
      <h1>{post.title}</h1>
      <RichText content={post.content.raw} />
        {post.content2 ? 
          <>
          {/* <InFeedAds />   */}
          <RichText content={post.content2.raw.children} />
          </> 
        : ''}
        {post.content3 ? 
          <>
          {/* <GoogleAds />   */}
          <RichText content={post.content3.raw.children} />
          </> 
        : ''}
        {post.content4 ? 
          <>
          {/* <InFeedAds />   */}
          <RichText content={post.content4.raw.children} />
          </> 
        : ''}
        {post.next ?
          <PageLink href={`/post/${post.next}`}>Next <FaAngleRight /></PageLink>
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

const PageLink = styled.a`
  display: inline-block;
  float: right;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 0.5em;
  padding: 10px 16px;
  background-color: #eaebed;
  border: 1px solid #dcdee1;
  border-radius: 4px;
  font-size: 20px;
  line-height: 1.65em;
  box-sizing: border-box;
`