import React from 'react'
import { getSlug } from '../services';
import moment from 'moment';
import styled from 'styled-components';

const SitemapGenerator = ({ posts }) => {
  console.log(posts);
  return (
    <div>
    <h2>This is a sitemap Generator</h2>
        {posts.map((post, index) => (<div>
            <Pa>{`<url>`}</Pa>
            <Pa>{`<loc>ph2canada.com/post/${post.node.slug}</loc>`}</Pa>
		        <Pa>{`<lastmod>${moment(post.node.publishedAt).format('YYYY-MM-DD')}</lastmod>`}</Pa>
            <Pa>{`</url>`}</Pa>
            <br /><Pa></Pa>
        </div>))}
    
    </div>
  )
}

export default SitemapGenerator

export async function getStaticProps() {
    const posts = await getSlug();
  
    return {
      props: { 
        posts: posts.edges},
        revalidate: 1,
    };
  }

  const Pa = styled.p`
    font-size: 12px;
    line-height: 1;

  `