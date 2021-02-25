import React, { useEffect } from 'react';
import { FullPost } from 'components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { appendItem } from 'modules/PostsList/actions'
import { setCreatedAt } from 'modules/AddForm/actions'
import { postsApi } from 'utils/api'


const FullPostContainer = ({post, postId,setCreatedAt,appendItem, createdAt}) => {
  useEffect(() => {
      postsApi.get(postId).then(({ data }) => {
        appendItem(data);
        setCreatedAt(data.createdAt)
      });
  }, [])
  return (
    <>
      {
          <FullPost
            text={post && post.text} 
            createdAt={createdAt} 
          />
      }
    </>
  )
}


const mapStateToProps = ({ posts,addPost }, { match }) => ({
  post: posts.items && posts.items.filter(post => post._id === match.params.id)[0],
  postId: match.params.id,
  createdAt: addPost.createdAt
});

const mapDispatchToProps = {
  appendItem,
  setCreatedAt
}


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FullPostContainer),
);