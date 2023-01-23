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
      <DesktopAds><div id="ezoic-pub-ad-placeholder-106"><GoogleAds ads={"top"} /></div></DesktopAds>
      <FeaturedImage src={post.featuredImage.url} />
      <Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author>

      <h1 id="intro">{post.title}</h1>

      {post.tableOfContents ? <TableContents post={post} /> : ""}

        <div><RichText content={post.content.raw} /></div>
        {post.contentb ? <>
            {post.ads ? <MobileAds><div id="ezoic-pub-ad-placeholder-108"><GoogleAds ads={"article"} /></div></MobileAds> : ''}
          <RichText content={post.contentb.raw.children} />
        </> : ''}

        {post.content1 ? <div id="one">
            {post.ads && post.ad0 ? <div id="ezoic-pub-ad-placeholder-109"><GoogleAds ads={"infeed"} /></div> : ''}
          <RichText content={post.content1.raw.children} />
          </div> : ''}
        {post.content1b ? <>
            {post.ads && post.ad1 ? <MobileAds><div id="ezoic-pub-ad-placeholder-110"><GoogleAds ads={"infeed"} /></div></MobileAds> : ''}
          <RichText content={post.content1b.raw.children} />
          </> : ''}

        {post.content2 ? <div id="two">
            {post.ads && post.ad1 ? <div id="ezoic-pub-ad-placeholder-111"><GoogleAds ads={"article"} /></div> : ''}
          <RichText content={post.content2.raw.children} />
          </div> : ''}
        {post.content2b ? <>
            {post.ads && post.ad2 ? <MobileAds><div id="ezoic-pub-ad-placeholder-112"><GoogleAds ads={"infeed"} /></div></MobileAds> : ''}
          <RichText content={post.content2b.raw.children} />
          </> : ''}

        {post.content3 ? <div id="three">
            {post.ads && post.ad2 ? <div id="ezoic-pub-ad-placeholder-113"><GoogleAds ads={"top"} /></div> : ''}
          <RichText content={post.content3.raw.children} />
          </div> : ''}
        {post.content3b ? <>
            {post.ads && post.ad3 ? <MobileAds><div id="ezoic-pub-ad-placeholder-114"><GoogleAds ads={"infeed"} /></div></MobileAds> : ''}
          <RichText content={post.content3b.raw.children} />
          </> : ''}

        {post.content4 ? <div id="four">
            {post.ads && post.ad3 ? <div id="ezoic-pub-ad-placeholder-115"><GoogleAds ads={"article"} /></div> : ''}
          <RichText content={post.content4.raw.children} />
          </div> : ''}
        {post.content4b ? <>
            {post.ads && post.ad4 ? <MobileAds><div id="ezoic-pub-ad-placeholder-116"><GoogleAds ads={"infeed"} /></div></MobileAds> : ''}
          <RichText content={post.content4b.raw.children} />
          </> : ''}        

        {post.content5 ? <div id="five">
            {post.ads && post.ad4 ? <div id="ezoic-pub-ad-placeholder-117"><GoogleAds ads={"infeed"} /></div> : ''}
          <RichText content={post.content5.raw.children} />
          </div> : ''}
        {post.content5b ? <>
            {post.ads && post.ad5 ? <MobileAds><div id="ezoic-pub-ad-placeholder-118"><GoogleAds ads={"infeed"} /></div></MobileAds> : ''}
          <RichText content={post.content5b.raw.children} />
          </> : ''}

        <BuyMeCoffee />

        {post.next ?
          <PageLink href={`/post/${post.next}`}>Next <FaAngleRight /></PageLink>
        : ''}
        <p /><br />

        <div id="ezoic-pub-ad-placeholder-119"><GoogleAds /></div>
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
margin: 2rem auto 0.5rem auto ;
display: center;
max-width: 95%;

    @media (orientation: landscape) {
        max-height: 50vh;
    }

    @media (orientation: portrait) {
        max-height: 90vh;
        margin: 0.5rem auto;
        
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

export const MobileAds = styled.div`
  
  @media screen and (min-width: 900px) {
    display: none;
}
`

export const DesktopAds = styled.div`
    @media screen and (max-width: 900px) {
    display: none;
}
`