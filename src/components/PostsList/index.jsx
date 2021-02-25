import React from 'react'
import { PostItem } from '../'
import { Link } from 'react-router-dom';


import './PostsList.scss'

const PostsList = ({ items, onRemove }) => {
    return (
      <div className="post-items">
        <div className="content">
            <Link to={`/new-item`}>
              <button type="button" className="btn-add" >Add post</button> 
            </Link>
          </div>
        {items ? items.map(post => <PostItem {...post} onRemove={onRemove} />) : 'Loading...'}
      </div>
    );
  };

export default PostsList