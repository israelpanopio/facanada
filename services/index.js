import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFeaturedPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection(
            where: {featuredPost: true}
            first: 5
            orderBy: featuredPriority_ASC
          ) {
            edges {
                node {
                publishedAt
                slug
                title
                id
                featuredImage {
                    url
                }
                featuredPost
                content {
                    markdown
                }
                }
            }
        }
  }      
  
`

const result = await request(graphqlAPI, query);

return result.postsConnection.edges
};

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: {
                    slug_not: $slug
                    AND: {
                        categories_some: { slug_in: $categories}}}
                orderBy: publishedAt_DESC
                first: 4
            ) {
                title
                featuredImage {
                    url
                }
                publishedAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug, categories });

    return result.posts;
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails(){
            posts(
                orderBy: publishedAt_DESC
                first: 6
            ) {
                title
                featuredImage {
                    url
                }
                publishedAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.posts;
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                id
                name
                slug
            }
        }
      
    `
    const result = await request(graphqlAPI, query);

    return result.categories;
}


export const getFeaturedCategoryPost= async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
            postsConnection(
                where: {categories_some: {slug: $slug}, featuredPost: true}
                orderBy: createdAt_ASC
                first: 30
            ) {
                edges {
                    cursor
                    node {
                        publishedAt
                        slug
                        title
                        content {
                            raw
                            text
                            markdown
                        }
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
                pageInfo {
                    pageSize
                  }
            }
        }    
    `
    const result = await request(graphqlAPI, query, { slug });

    return result.postsConnection;
};

export const getLatests= async (slug) => {
    const query = gql`
      query getLatests($slug: String!) {
            postsConnection(
                where: {categories_some: {slug: $slug}}
                orderBy: publishedAt_DESC
                first: 99
            ) {
                edges {
                    cursor
                    node {
                        publishedAt
                        slug
                        title
                        content {
                            markdown
                        }
                        featuredImage {
                            url
                        }
                        categories {
                            slug
                        }
                    }
                }
                pageInfo {
                    pageSize
                  }
            }
        }    
    `
    const result = await request(graphqlAPI, query, { slug });

    return result.postsConnection;
};

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug } ) {
                publishedAt
                categories {
                    id
                    slug
                    name
                }
                slug
                title
                featuredImage {
                    url
                }
                content {
                    raw
                    markdown
                }
                contentb {
                    raw
                }
                content1 {
                    raw
                }
                content1b {
                    raw
                }
                content2 {
                    raw
                }
                content2b {
                    raw
                }
                content3 {
                    raw
                }
                content3b {
                    raw
                }
                content4 {
                    raw
                }
                content4b {
                    raw
                }
                content5 {
                    raw
                }
                content5b {
                    raw
                }
                next
                tableOfContents
                ads
                ad0
                ad1
                ad2
                ad3
                ad4
                ad5
            }            
        }
      
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection(first: 999) {
                edges {
                    node {
                    slug
                    }
                }
            }
      }      
      
    `
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges
};

export const getSearchPosts = async (searchKeyword) => {
    const query = gql`
      query MyQuery($searchKeyword: String!) {
        posts(where: {_search: $searchKeyword}) {
          id
          title
          slug
          content {
            markdown
          }
          content2 {
            markdown
          }
          content3 {
            markdown
          }
          content4 {
            markdown
          }
        }
      }
      
    `
    const result = await request(graphqlAPI, query, { searchKeyword });

    return result.posts;
};