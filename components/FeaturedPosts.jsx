import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFeaturedPosts, getRecentPosts } from '../services'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FeaturedPosts = () => {
    const images = [
      'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    ];
   
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
          },
          desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
          },
      };

      return (
        <div>
          <Carousel
            responsive={responsive}
            ssr
            showDots={true}
            slidesToSlide={1}
            containerClass="container-with-dots"
            itemClass="image-item"
            deviceType={''}
            centerMode={true}
          >
            {images.map((image) => {
              return <Image key={image} url={image} alt={image} />;
            })}
          </Carousel>
        </div>
      );
    
}

export default FeaturedPosts

const FeaturedPostCntr = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`


const Image = ({ url, alt }) => (
    <img
      draggable={false}
      style={{ width: '100%', height: '100%', position: 'relative' }}
      src={url}
      alt={alt}
    />
  )