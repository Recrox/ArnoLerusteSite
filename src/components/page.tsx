import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_PAGE_BY_SLUG } from '../services/queries';
import PageProps from '../models/page';

const Page: React.FC<PageProps> = ({ slug }) => {
  const { loading, error, data } = useQuery(GET_PAGE_BY_SLUG, {
    variables: { slug }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.pageBy.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.pageBy.content }} />
    </div>
  );
};

export default Page;