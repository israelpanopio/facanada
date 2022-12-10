import React from 'react';
import moment from 'moment';
import styled from 'styled-components'
import { FaCalendarWeek } from 'react-icons/fa';
import { Author } from './sharedstyles';
import { PostCardItem } from './PostCard';

const WidgetCard = ({ post }) => {
  return (<PostCardItem>
    <ImagePreview
      href={`/post/${post.slug}`}
      style={{
        backgroundImage: `url('${post.featuredImage.url}')`,
        textDecoration:"none"
    }}>
    <Title><h5>{post.title}</h5></Title>
    <Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author></ImagePreview>
  </PostCardItem>)
}

export default WidgetCard

const Title = styled.div`
  margin: auto;
  max-width: 90%;
  text-align: center;
  background-color: white;
  opacity: 80%;
    overflow-wrap: break-word;
  transform: translateY(-50%);
  border-radius: 10px;
  text-decoration: none; 
`

const ImagePreview = styled.a`
  padding-top: 20%;
  background-size: cover;
  background-position: center;
  margin: 0px;
  border-radius: 10px;
`