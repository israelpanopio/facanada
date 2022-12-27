import React, { useState, useEffect } from 'react'
import { RichText } from "@graphcms/rich-text-react-renderer";
import styled from 'styled-components'
import moment from 'moment';
import { Author } from './sharedstyles';
import { FaCalendarWeek, FaAngleRight } from 'react-icons/fa';
import { BuyMeCoffee, GoogleAds } from '../components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll'

const PostDetail = ({ post }) => {
  const [openTable, setOpenTable] = useState(false);

  return (
    <Post>
      <GoogleAds ads={"top"} />        
      <FeaturedImage src={post.featuredImage.url} />
      <Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author>

      {post.tableOfContents ? <>
      <TableIcon onClick={(() => setOpenTable(!openTable))}>
         {openTable ? <h6 ><FaBars /> On this page</h6> : <p><br /><u><FaBars /> See table of contents</u></p>}
      </TableIcon>
        <TableOfContens openTable={openTable}>
          <ul style={{margin:"0"}}>
            <li><LinkS to="intro" smooth={true} duration={500} spy={true} exact='true' offset={-80}><h6 style={{margin:"0"}}>{post.title}</h6></LinkS></li>
            <ul>
              <li><LinkS to="one" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content1.raw.children[0].children[0].text}</LinkS></li>
              <li><LinkS to="two" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content2.raw.children[0].children[0].text}</LinkS></li>
              <li><LinkS to="three" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content3.raw.children[0].children[0].text}</LinkS></li>
              <li><LinkS to="four" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content4.raw.children[0].children[0].text}</LinkS></li>
              <li><LinkS to="five" smooth={true} duration={500} spy={true} exact='true' offset={-80}>{post.content5.raw.children[0].children[0].text}</LinkS></li>
            </ul>
          </ul>
        </TableOfContens>
        </> : ""}

      <h1 id="intro">{post.title}</h1>

        <div><RichText content={post.content.raw} /></div>
        {post.contentb ? <>
            {post.ads && post.ad0 ? <MobileAds><GoogleAds ads={"infeed"} /></MobileAds> : ''}
          <RichText content={post.contentb.raw.children} />
        </> : ''}

        {post.content1 ? <div id="one">
            {post.ads && post.ad0? <GoogleAds ads={"infeed"} /> : ''}
          <RichText content={post.content1.raw.children} />
          </div> : ''}
        {post.content1b ? <>
            {post.ads && post.ad1 ? <MobileAds><GoogleAds ads={"infeed"} /></MobileAds> : ''}
          <RichText content={post.content1b.raw.children} />
          </> : ''}

        {post.content2 ? <div id="two">
            {post.ads && post.ad1 ? <GoogleAds ads={"infeed"} /> : ''}
          <RichText content={post.content2.raw.children} />
          </div> : ''}
        {post.content2b ? <>
            {post.ads && post.ad2 ? <MobileAds><GoogleAds ads={"infeed"} /></MobileAds> : ''}
          <RichText content={post.content2b.raw.children} />
          </> : ''}

        {post.content3 ? <div id="three">
            {post.ads && post.ad2 ? <GoogleAds ads={"infeed"} /> : ''}
          <RichText content={post.content3.raw.children} />
          </div> : ''}
        {post.content3b ? <>
            {post.ads && post.ad3 ? <MobileAds><GoogleAds ads={"infeed"} /></MobileAds> : ''}
          <RichText content={post.content3b.raw.children} />
          </> : ''}

        {post.content4 ? <div id="four">
            {post.ads && post.ad3 ? <GoogleAds ads={"infeed"} /> : ''}
          <RichText content={post.content4.raw.children} />
          </div> : ''}
        {post.content4b ? <>
            {post.ads && post.ad4 ? <MobileAds><GoogleAds ads={"infeed"} /></MobileAds> : ''}
          <RichText content={post.content4b.raw.children} />
          </> : ''}        

        {post.content5 ? <div id="five">
            {post.ads && post.ad4 ? <GoogleAds ads={"infeed"} /> : ''}
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

const TableIcon = styled.div`
    display: inline-block;
    ${'' /* transform: translate(-100%, 25%); */}
    cursor: pointer;
    margin: 0;
`

const TableOfContens = styled.div`
  display: ${({ openTable }) => (openTable ? 'block' : 'none')};
  margin-top:0;
`

const LinkS = styled(Link)`
  cursor: pointer;
`