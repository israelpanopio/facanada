import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import styled from 'styled-components'
import { FaCalendarWeek } from 'react-icons/fa';
import { Author } from './sharedstyles';

const PostCard = ({ post }) => {
  return (<PostCardItem>
    <ImagePreview
      href={`/post/${post.slug}`}
      style={{backgroundImage: `url('${post.featuredImage.url}')`}}>
      <Title></Title>
      <Author><FaCalendarWeek />{moment(post.createdAt).format('MMM DD, YYYY')}</Author>
    </ImagePreview>
    <h2>{post.title}</h2>
    <Excerpt>`${(post.content.markdown).slice(0, 200)}...`</Excerpt>
    <MobileExcerpt>`${(post.content.markdown).slice(0, 160)}...`</MobileExcerpt>
    
  </PostCardItem>)
}

export default PostCard

const Title = styled.div`
  margin: auto;
  max-width: 90%;
  text-align: center;
  background-color: white;
  opacity: 80%;
    overflow-wrap: break-word;
  transform: translateY(-90%);
  border-radius: 10px;
`

export const PostCardItem = styled.div`
  display: grid;
  margin: 7px auto;
  width: 95%;
  cursor: pointer;
  border-radius: 10px;
  padding-bottom: 10px;

  &:hover{
  background-color: #ffc4bc;
  padding: 10px;
}
`
const ImagePreview = styled(Link)`
  padding-top: 45%;
  background-size: cover;
  background-position: center;
  margin: 0px;
  border-radius: 10px;
  
  &:hover{
  border-bottom: 3px solid white;
}
`


const Excerpt = styled.p`
  max-width:95%;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    display:none;
}
`

const MobileExcerpt = styled.p`
  max-width:95%;
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    display:none;
}
`