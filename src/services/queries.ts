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

