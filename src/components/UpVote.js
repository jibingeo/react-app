import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class UpVote extends Component {
  constructor() {
    super();
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    const { upVote } = this.props;
    upVote()
  }

  render() {
    return(
      <button onClick={this.handleUpVote}>
        {'+'}
      </button>
    );
  }
}

const UP_VOTE = gql`
  mutation UpVote($postId: Int!) {
    upvotePost(postId: $postId) {
      votes
      id
    }
  }
`;

export default graphql(UP_VOTE,{
  props: ({ ownProps, mutate }) => ({
    upVote: () => {
      mutate({
        variables: {
          postId: ownProps.postId
        },
        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   upvotePost: {
        //     __typename: 'Post',
        //     id: ownProps.postId,
        //     votes: 0,
        //     // votes: ownProps.votes + 1,
        //   }
        // }
      })
    }
  })
})(UpVote)
