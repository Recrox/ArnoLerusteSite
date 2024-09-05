import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`; 

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    pageBy(slug: $slug) {
      title
      content
    }
  }
`;