import React, { useState, useEffect }  from 'react'
import { PostCard } from '../../components';
import { Row, TogglePageRight } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getFeaturedCategoryPost } from '../../services';
import styled from 'styled-components';
import { FaRegHandPointRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

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
      <CategoryTitle>{category.name}</CategoryTitle>
      <TogglePageRight><Link href={`/discussion/${category.slug}?page=1`}>Proceed to Discussions <FaRegHandPointRight /></Link></TogglePageRight>
      <Row>{pagePosts.map((post, index ) => (
            <PostCard key={index} post={post.node} title={post.node.title} />
          ))} 
      </Row>
          <Page>  Page {page} of {numberPages} </Page>
          <Pages page={page}>
            {page == 1 ? '' : 
              <Link href={`/category/${category.slug}?page=${page - 1}`}>
                <FaAngleLeft/>Previous 
              </Link>
            }
            {page == numberPages ? '' : 
            <Link style={{margin: "auto 0 auto auto"}} href={`/category/${category.slug}?page=${page + 1}`}>
              Next <FaAngleRight/>
            </Link>
            }
          </Pages>
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
  font-size: 20px;
  line-height: 1.65em;
`

export const Page = styled.div`
font-size: 20px;
line-height: 1.65em;
  text-align: center;
  margin: auto
`