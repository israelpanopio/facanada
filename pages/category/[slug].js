import React, { useState, useEffect }  from 'react'
import { GoogleAds, PostCard } from '../../components';
import { Row, TogglePageRight } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getFeaturedCategoryPost } from '../../services';
import styled from 'styled-components';
import { FaRegHandPointRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { DesktopAds, MobileAds } from '../../components/PostDetail';

const CategoryDetails = ({ posts, category, pageSize }) => {
  const router = useRouter();
  const page = parseInt(router.query.page);
  const showItems = 6;
  const numberPages = (Math.ceil(pageSize / showItems));
  const [pagePosts, setPagePosts] = useState([]);

  useEffect(() => {
    setPagePosts(posts.slice((page * showItems - showItems ), (page * showItems)));
  }, [category, page]);

if (router.isFallback) {
  return (
    <h1>Loading...</h1>
  )
} else

return (
    <Cntr>
    <img style={{display:"none"}} src="/logo.png" />
      <CategoryTitle>{category.name}</CategoryTitle>
      <TogglePageRight><Link href={`/discussion/${category.slug}?page=1`}><u>See Discussions <FaRegHandPointRight /></u></Link></TogglePageRight>
      <Row>{pagePosts.map((post, index ) => (
            <PostCard key={index} post={post.node} title={post.node.title} />
          ))} 
      </Row>
          <Page>  Page {page} of {numberPages} </Page>
          <Pages page={page}>
            {page == 1 ? '' : 
              <PageLink style={{margin: "auto auto auto 0"}} href={`/category/${category.slug}?page=${page - 1}`}>
                <FaArrowLeft/> Previous 
              </PageLink>
            }
            {page == numberPages ? '' : 
            <PageLink style={{margin: "auto 0 auto auto"}} href={`/category/${category.slug}?page=${page + 1}`}>
              Next <FaArrowRight/>
            </PageLink>
            }
          </Pages>
        {/* <DesktopAds><div id="ezoic-pub-ad-placeholder-123"><GoogleAds ads={"article"} /></div></DesktopAds>
        <MobileAds><div id="ezoic-pub-ad-placeholder-120"><GoogleAds ads={"items"} /></div></MobileAds> */}
    </Cntr>
  )
}

export default CategoryDetails

export async function getStaticProps({ params }) {
  const posts = await getFeaturedCategoryPost(params.slug);
  const theCategories = await getCategories();

  return {
    props: { 
      posts: posts.edges,
      pageSize: posts.pageInfo.pageSize,
      category: theCategories.find((({ slug }) => slug === params.slug )) },
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

export const Cntr = styled.div`
max-width: 1200px;
min-height: 80vh;
margin: auto;
justify-content: center;

@media screen and (max-width: 1200px) {
max-width: 90vw;
}
`

export const CategoryTitle = styled.h1`
text-align: center;
border-bottom: 5px solid red;
margin-bottom: 0;
font-size: 30px;

`

export const Pages = styled.div`
  display: grid;
  grid-template-columns: ${({ page }) => (page == 1 ? '1fr' : `1fr 1fr`)};
`

export const PageLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 0.5em;
  padding: 10px 16px;
  background-color: #eaebed;
  border: 1px solid #dcdee1;
  border-radius: 4px;
  font-size: 20px;
  line-height: 1.65em;
  box-sizing: border-box;
  max-width: 140px;
`

export const Page = styled.div`
font-size: 20px;
line-height: 1.65em;
  text-align: center;
  margin: auto
`