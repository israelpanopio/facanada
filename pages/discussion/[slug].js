import React, { useState, useEffect } from 'react'
import { DiscussionCard, GoogleAds, } from '../../components';
import { TogglePageLeft } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getLatests } from '../../services';
import { FaRegHandPointLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { Cntr, CategoryTitle, Page, Pages, PageLink } from '../category/[slug]';
import { DesktopAds, MobileAds } from '../../components/PostDetail';

const DiscussionDetails = ({ category, posts, pageSize }) => {
  const router = useRouter();
  const page = parseInt(router.query.page);
  const showItems = 10;
  const numberPages = (Math.ceil(pageSize / showItems));
  const [pagePosts, setPagePosts] = useState([]);

  useEffect(() => {
    setPagePosts(posts.slice((page * showItems - showItems), (page * showItems)));
  }, [category, page]);

  if (router.isFallback) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <Cntr>
    <img style={{display:"none"}} src="/logo.png" />
      <CategoryTitle>{category.name}</CategoryTitle>
      {category.slug === "news" ? "" : <TogglePageLeft><Link href={`/category/${category.slug}?page=1`}><u><FaRegHandPointLeft /> Back to Guides</u></Link></TogglePageLeft>}
      {pagePosts.map((post, index) => (
        <DiscussionCard key={index} post={post.node} title={post.node.title} />
      ))}
      {/* <div id="ezoic-pub-ad-placeholder-123"><GoogleAds ads={"top"} /></div>
      {pagePosts.slice(5,10).map((post, index) => (
        <DiscussionCard key={index} post={post.node} title={post.node.title} />
      ))} */}
      <Page>  Page {page} of {numberPages} </Page>
      <Pages page={page}>
        {page == 1 ? '' :
          <PageLink href={`/discussion/${category.slug}?page=${page - 1}`}>
            <FaArrowLeft /> Previous
          </PageLink>
        }
        {page == numberPages ? '' :
          <PageLink style={{ margin: "auto 0 auto auto" }} href={`/discussion/${category.slug}?page=${page + 1}`}>
            Next <FaArrowRight />
          </PageLink>
        }
      </Pages>
        {/* <DesktopAds><div id="ezoic-pub-ad-placeholder-123"><GoogleAds ads={"article"} /></div></DesktopAds>
        <MobileAds><div id="ezoic-pub-ad-placeholder-120"><GoogleAds ads={"items"} /></div></MobileAds> */}
    </Cntr>
  )
}

export default DiscussionDetails

export async function getStaticProps({ params }) {
  const posts = await getLatests(params.slug);
  const theCategories = await getCategories();

  return {
    props: {
      posts: posts.edges,
      pageSize: posts.pageInfo.pageSize,
      category: theCategories.find((({ slug }) => slug === params.slug))
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();

  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
