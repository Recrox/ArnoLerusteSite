import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://ton-site-wordpress.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
