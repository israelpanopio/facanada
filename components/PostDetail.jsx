import React from 'react'
import { RichText } from "@graphcms/rich-text-react-renderer";
import styled from 'styled-components'
import moment from 'moment';
import { Author } from './sharedstyles';
import { FaCalendarWeek, FaAngleRight } from 'react-icons/fa';
import { BuyMeCoffee, GoogleAds, TableContents } from '../components';

const PostDetail = ({ post }) => {
  return (
    <Post>
      <DesktopAds><GoogleAds /></DesktopAds>
      <FeaturedImage src={post.featuredImage.url} />
      <Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author>

      {post.tableOfContents ? <TableContents post={post} /> : ""}

      <h1 id="intro">{post.title}</h1>

        <div><RichText content={post.content.raw} /></div>
        {post.contentb ? <>
            {post.ads && post.ad0 ? <MobileAds><GoogleAds /></MobileAds> : ''}
          <RichText content={post.contentb.raw.children} />
        </> : ''}

        {post.content1 ? <div id="one">
            {post.ads && post.ad0? <GoogleAds ads={"article"} /> : ''}
          <RichText content={post.content1.raw.children} />
          </div> : ''}
        {post.content1b ? <>
            {post.ads && post.ad1 ? <MobileAds><GoogleAds ads={"top"} /></MobileAds> : ''}
          <RichText content={post.content1b.raw.children} />
          </> : ''}

        {post.content2 ? <div id="two">
            {post.ads && post.ad1 ? <GoogleAds /> : ''}
          <RichText content={post.content2.raw.children} />
          </div> : ''}
        {post.content2b ? <>
            {post.ads && post.ad2 ? <MobileAds><GoogleAds ads={"infeed"} /></MobileAds> : ''}
          <RichText content={post.content2b.raw.children} />
          </> : ''}

        {post.content3 ? <div id="three">
            {post.ads && post.ad2 ? <GoogleAds ads={"top"} /> : ''}
          <RichText content={post.content3.raw.children} />
          </div> : ''}
        {post.content3b ? <>
            {post.ads && post.ad3 ? <MobileAds><GoogleAds ads={"top"} /></MobileAds> : ''}
          <RichText content={post.content3b.raw.children} />
          </> : ''}

        {post.content4 ? <div id="four">
            {post.ads && post.ad3 ? <GoogleAds /> : ''}
          <RichText content={post.content4.raw.children} />
          </div> : ''}
        {post.content4b ? <>
            {post.ads && post.ad4 ? <MobileAds><GoogleAds ads={"infeed"} /></MobileAds> : ''}
          <RichText content={post.content4b.raw.children} />
          </> : ''}        

        {post.content5 ? <div id="five">
            {post.ads && post.ad4 ? <GoogleAds ads={"top"} /> : ''}
          <RichText content={post.content5.raw.children} />
          </div> : ''}
        {post.content5b ? <>
            {post.ads && post.ad5 ? <MobileAds><GoogleAds ads={"infeed"} /></MobileAds> : ''}
          <RichText content={post.content5b.raw.children} />
          </> : ''}

        <BuyMeCoffee />

        {post.next ?
          <PageLink href={`/post/${post.next}`}>Next <FaAngleRight /></PageLink>
        : ''}
        <p /><br />

        <GoogleAds />
    </Post>
  )
}

export default PostDetail

const Post = styled.div`
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media screen and (max-width: 900px) {
    max-width: 96vw;
    margin: auto auto auto 2vw;
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

const MobileAds = styled.div`
  
  @media screen and (min-width: 900px) {
    display: none;
}
`

const DesktopAds = styled.div`
    @media screen and (max-width: 900px) {
    display: none;
}
`