import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../services/queries";

// Composant pour afficher les articles
  const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} Test</p>;

  return (
    <div>
      
      {data.posts.nodes.map((post: any, index: number) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>{post.date}</small>
        </div>
      ))}
    </div>
  );
};

export default Posts;