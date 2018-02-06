import React from 'react';
import gql from 'graphql-tag';
import UpVote from './UpVote'

const style= {
  float: 'left',
  padding: 10
}

function Post({ post: { title, votes, author, id }}) {
  return (
    <ul style={{overflow: 'auto'}}>
      <div style={{width: 20, ...style}}>{id}</div>
      <div style={{width: 200, ...style}}>{title}</div>
      <div style={{width: 100, ...style}}>{author.firstName}</div>
      <div style={{width: 50, ...style}}>{votes}</div>
      <div style={{width: 50, ...style}}>
         // <UpVote votes={votes} postId={id} />
      </div>
    </ul>
  );
}

Post.fragments = {
  post: gql`
    fragment Post on Post {
      id
      title
      votes
      author {
        firstName
      }
    }
  `
};

export default Post;
