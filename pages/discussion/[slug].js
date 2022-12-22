import React, { useState, useEffect } from 'react'
import {  DiscussionCard, GoogleAds,  } from '../../components';
import { TogglePageLeft } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getLatests } from '../../services';
import { FaRegHandPointLeft, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import { Cntr, CategoryTitle } from '../category/[slug]';
import styled from 'styled-components';


const CategoryDetails = ({ category, posts }) => {
  const router = useRouter();
  const page = parseInt(router.query.page);
  const numberPages = (Math.ceil(posts.pageInfo.pageSize / 10));
  const [pagePosts, setPagePosts] = useState([]);
  console.log(numberPages);

  useEffect(() => {
    setPagePosts(posts.edges.slice((page * 10 -10 ), (page * 10)));
  }, [page]);

if (router.isFallback) {
  return (
    <h1>Loading...</h1>
  )
} 

return (
    <Cntr>
        <CategoryTitle>{category.name}</CategoryTitle>
        {category.slug === "news" ? "" : <TogglePageLeft><Link href={`/category/${category.slug}`}><FaRegHandPointLeft /> Back to Featured Posts</Link></TogglePageLeft>}
        {pagePosts.map((post, index ) => (
              <DiscussionCard key={index} post={post.node} title={post.node.title} />
            ))} 
        {/* <GoogleAds /> */}
          {/* <div id="fb-root"></div>
          <p>Can't find what you're looking for? Let's discuss in the comments section below.</p>
          <div className="fb-comments" data-href={`https://www.ph2canada.com/discussion/${category.slug}`} data-width="100%" data-numposts="1"></div> */}
          <Page>  Page {page} of {numberPages} </Page>
          <Pages page={page}>
            {page == 1 ? '' : 
              <Link href={`/discussion/${category.slug}?page=${page - 1}`}>
                <FaAngleLeft/>Previous 
              </Link>
            }
            {page == numberPages ? '' : 
            <Link style={{margin: "auto 0 auto auto"}} href={`/discussion/${category.slug}?page=${page + 1}`}>
              Next <FaAngleRight/>
            </Link>
            }
          </Pages>

          {/* <div
            display="flex"
          >
          </div> */}
    </Cntr>
  )
}

export default CategoryDetails

export async function getStaticProps({ params }) {
  const posts = await getLatests(params.slug);
  const theCategories = await getCategories();

  return {
    props: { 
      posts,
      category: theCategories.find((({ slug }) => slug === params.slug )) },
      revalidate: 1,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

const Pages = styled.div`
  display: grid;
  grid-template-columns: ${({ page }) => (page == 1 ? '1fr' : `1fr 1fr`)};
  font-size: 20px;
  line-height: 1.65em;
`

const Page = styled.div`
font-size: 20px;
line-height: 1.65em;
  text-align: center;
  margin: auto
`