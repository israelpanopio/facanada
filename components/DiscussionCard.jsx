import React from 'react';
import moment from 'moment';
import styled from 'styled-components'
import { FaCalendarWeek } from 'react-icons/fa';
import { AuthorDiv } from './sharedstyles';

const DiscussionCard = ({ post }) => {
  return (<a href={`/post/${post.slug}`} style={{textDecoration:"none"}}>
  <PostCardItem>
    <ImagePreview
      style={{backgroundImage: `url('${post.featuredImage.url}')`}}>
      <AuthorDiv><Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author></AuthorDiv>
    </ImagePreview><div>
    <Title>{post.title}</Title>
    <Excerpt> {(post.content.markdown).slice(0, 150)}...</Excerpt></div>
    {/* <MobileExcerpt>{(post.content.markdown).slice(0, 160)}...</MobileExcerpt> */}
  </PostCardItem></a>)
}

export default DiscussionCard

const Title = styled.h5`
  line-height: 1.3rem;
  margin: 0 0 0 10px;
  text-decoration: none; 
 
  @media screen and (min-width: 900px) {
    font-size: 1.5rem;
  line-height: 1.65rem;
}
`

export const Author = styled.p`
background-color: white;
opacity: 80%;
font-size: 13px;
margin: auto; 
padding: 2px 6px 0 6px;
float:right;
  border-radius: 10px 0 0 0 ;

@media screen and (max-width: 900px) {
  font-size: 11px;

}
`

export const PostCardItem = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  margin: 7px auto 15px auto;
  width: 95%;
  cursor: pointer;
  border-radius: 5px;
  padding-bottom: 10px;
  width: 1200px;
  padding: 10px;

  &:hover{
  background-color: #ffc4bc;
  padding: 10px;
}

@media screen and (max-width: 900px) {
  grid-template-columns: 120px 1fr;
  width: auto;
}
`
const ImagePreview = styled.div`
  padding-top: 45%;
  background-size: cover;
  background-position: center;
  margin: 0px;
  border-radius: 10px;
`
const Excerpt = styled.p`
  max-width:95%;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    display:none;
}
`
