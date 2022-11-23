import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getFeaturedPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection(
            where: {featuredPost: true}
            first: 12
            orderBy: featuredPriority_ASC
          ) {
            edges {
                node {
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                publishedAt
                categories {
                    name
                    slug
                }
                slug
                title
                id
                featuredImage {
                    url
                }
                featuredPost
                content {
                    raw
                    text
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
                where: {slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
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
                orderBy: publishedAt_ASC
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
            }
        }    
    `
    const result = await request(graphqlAPI, query, { slug });

    return result.postsConnection.edges;
};

export const getLatests= async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
            postsConnection(
                where: {categories_some: {slug: $slug}}
                orderBy: publishedAt_DESC
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
            }
        }    
    `
    const result = await request(graphqlAPI, query, { slug });

    return result.postsConnection.edges;
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
                    html
                }
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
                    author {
                        bio
                        name
                        id
                        photo {
                        url
                        }
                    }
                    publishedAt
                    categories {
                        name
                        slug
                    }
                    slug
                    title
                    id
                    featuredImage {
                        url
                    }
                    featuredPost
                    content {
                        raw
                    }
                    }
                }
            }
      }      
      
    `
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges
};