import React, { useState, useEffect } from 'react';
import { Cntr, CategoryTitle} from './category/[slug]';
import styled from 'styled-components'
import { getCategories, getLatests } from '../services';
import Link from 'next/link';


const sitemap = ({visit, study, work, permanentResidence, news}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);
    
  return (
    <Cntr>
      <CategoryTitle>Sitemap</CategoryTitle>
      <Table>
        <h2>Pages</h2> 
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        {categories.map((category) => (
            <li><Link href={`/${category.slug === "news" ? "discussion" : "category"}/${category.slug}?page=1`}>{category.name} Guide</Link></li>
        ))}
        <li><Link href="/sitemap">Sitemap</Link></li>
      </ul>

      <h2>Posts</h2>
      <ul>
        <li><h3>Visit</h3></li>
        <ul>
            {visit.map((post, index) => (
                <li><Link href={`/post/${post.node.slug}`}>{post.node.title}</Link></li>
            ))}
        </ul>
        
        <li><h3>Study</h3></li>
        <ul>
            {study.map((post, index) => (
                <li><Link href={`/post/${post.node.slug}`}>{post.node.title}</Link></li>
            ))}
        </ul>
        
        <li><h3>Work</h3></li>
        <ul>
            {work.map((post, index) => (
                <li><Link href={`/post/${post.node.slug}`}>{post.node.title}</Link></li>
            ))}
        </ul>

        <li><h3>Permanent Residence</h3></li>
        <ul>
            {permanentResidence.map((post, index) => (
                <li><Link href={`/post/${post.node.slug}`}>{post.node.title}</Link></li>
            ))}
        </ul>

        <li><h3>News</h3></li>
        <ul>
            {news.map((post, index) => (
                <li><Link href={`/post/${post.node.slug}`}>{post.node.title}</Link></li>
            ))}
        </ul>
      </ul>
      
      </Table>
    </Cntr>
  )
}

export default sitemap

export async function getStaticProps() {
    const visit = await getLatests("visit");
    const study = await getLatests("study");
    const work = await getLatests("work");
    const permanentResidence = await getLatests("permanent-residence");
    const news = await getLatests("news");
  
    return {
      props: { 
        visit: visit.edges,
        study: study.edges,
        work: work.edges,
        permanentResidence: permanentResidence.edges,
        news: news.edges,
      },
        revalidate: 86400,
    };
  }

const Table = styled.div`
    min-width: 1200px;
    display: block;
`