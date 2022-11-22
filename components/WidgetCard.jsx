import React from 'react';
import moment from 'moment';
import styled from 'styled-components'
import { FaCalendarWeek } from 'react-icons/fa';
import { Author } from './sharedstyles';
import { PostCardItem } from './PostCard';
import Link from 'next/link';

const WidgetCard = ({ post }) => {
  return (<PostCardItem>
    <ImagePreview
      href={`/post/${post.slug}`}
      style={{
        backgroundImage: `url('${post.featuredImage.url}')`
    }}>
    <Title><h3>{post.title}</h3></Title>
    <Author><FaCalendarWeek />{moment(post.createdAt).format('MMM DD, YYYY')}</Author></ImagePreview>
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
`

const ImagePreview = styled(Link)`
  padding-top: 20%;
  background-size: cover;
  background-position: center;
  margin: 0px;
  border-radius: 10px;
  
  &:hover{
  border-bottom: 3px solid white;
}
`