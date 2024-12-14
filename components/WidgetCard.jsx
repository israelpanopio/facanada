import React from 'react';
import moment from 'moment';
import styled from 'styled-components'
import { FaCalendarWeek } from 'react-icons/fa';
import { Author } from './sharedstyles';

const WidgetCard = ({ post }) => {
  return (<PostCardItem>
    <ImagePreview
      href={`/post/${post.slug}`}
      style={{
        backgroundImage: `url('${post.featuredImage.url}')`,
        textDecoration:"none"
    }}>
    <Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author></ImagePreview>
    <WidgetTitle>{post.title}</WidgetTitle>
  </PostCardItem>)
}

export default WidgetCard

const PostCardItem = styled.div`
  display: grid;
  margin: 7px auto 15px auto;
  cursor: pointer;
  border-radius: 10px;
  padding: 15px 10px 5px 10px;
  width: 85%;

  &:hover{
  box-shadow: 6px 6px 10px grey;
  padding: 10px;
  color: black;
}
`

const ImagePreview = styled.a`
  padding-top: 50%;
  background-size: cover;
  background-position: center;
  margin: 0px;
  border-radius: 10px;
  
  &:hover{
  color: inherit;}
`

const WidgetTitle = styled.h5`
  margin: 0;
  max-width: 90%;
`