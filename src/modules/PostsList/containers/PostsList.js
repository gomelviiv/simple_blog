import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { PostsList } from 'components';
import { setItems, removeItem } from '../actions'
import { postsApi } from 'utils/api'

const PostsListContainer = ({removeItem,setItems, items}) => {
  useEffect(()=>{
    postsApi.get().then(({ data }) => {
      setItems(data)
    });
  },[])

  const deleteItem = (id) => {
      removeItem(id);
      postsApi.remove(id);
  }

  return (
    <PostsList 
      items={items} 
      onRemove={deleteItem} 
    />
  )
}


const mapStateToProps = (state) => ({
  items: state.posts.items
});

const mapDispatchToProps = {
  setItems,
  removeItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsListContainer);