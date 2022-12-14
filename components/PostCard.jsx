import React from 'react';
import moment from 'moment';
import styled from 'styled-components'
import { FaCalendarWeek } from 'react-icons/fa';
import { Author, AuthorDiv } from './sharedstyles';

const PostCard = ({ post }) => {
  return (<a href={`/post/${post.slug}`} style={{textDecoration:"none"}}>
  <PostCardItem>
    <ImagePreview
      style={{backgroundImage: `url('${post.featuredImage.url}')`}}>
      <AuthorDiv><Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author></AuthorDiv>
    </ImagePreview>
    <Title style={{margin:"0"}}>{post.title}</Title>
    <Excerpt> {(post.content.markdown).slice(0, 200)}...</Excerpt>
    <MobileExcerpt>{(post.content.markdown).slice(0, 100)}...</MobileExcerpt>
  </PostCardItem></a>)
}

export default PostCard

const Title = styled.h2`
  @media screen and (max-width: 900px) {
    font-size: 22px;
    margin: 0;
}
`

export const PostCardItem = styled.div`
  display: grid;
  margin: 7px auto 15px auto;
  cursor: pointer;
  border-radius: 10px;
  padding: 15px 10px 5px 10px;

  &:hover{
  box-shadow: 15px 15px 50px grey;
  padding: 10px;
  color: black;
}

@media screen and (max-width: 900px) {
width: 90vw;
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
  margin: 3px auto auto auto;
  line-height: 1.5rem;

  @media screen and (max-width: 900px) {
    display:none;
}
`

const MobileExcerpt = styled.p`
  max-width:95%;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.5rem;

  @media screen and (min-width: 900px) {
    display:none;
}
`