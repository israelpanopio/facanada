import React from 'react'
import { RichText } from "@graphcms/rich-text-react-renderer";
import styled from 'styled-components'
import moment from 'moment';
import { Author } from './sharedstyles';
import { FaCalendarWeek } from 'react-icons/fa';
import { PostComments } from './CommentSection';

const PostDetail = ({ post }) => {

  return (
    <div>
    <InFeedAds />        
      <FeaturedImage src={post.featuredImage.url} />
      <Author><FaCalendarWeek />{moment(post.publishedAt).format('MMM DD, YYYY')}</Author>  
      <h1>{post.title}</h1>
      <RichText content={post.content.raw.children} />
        <GoogleAds />
      <PostComments slug={post.slug} />
    </div>
  )
}

export default PostDetail

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