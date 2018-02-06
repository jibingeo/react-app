import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './Post'
import { filter } from 'graphql-anywhere';


function PostList({ data: { posts, loading } }) {

  if(loading)
    return "loading..."
  if(!posts)
    return null;

  return (
    <ul>
      {posts.map((post) => (
        // <Post
        //   key={post.id}
        //   post={filter(Post.fragments.post, post)}
        // />
        <ul key={post.id}>
          {post.id} | {post.title}
        </ul>
      ))}
    </ul>
  );
}

const POST_QUERY = gql`
  query {
    posts{
      id
      title
    }
  }
`;

// const POST_QUERY = gql`
//   query {
//     posts{
//       ...Post
//     }
//   }
//   ${Post.fragments.post}
// `;

export default graphql(POST_QUERY)(PostList);
