import { postsApi } from 'utils/api';

export const  setItems = items => ({
  type: 'POSTS:SET_ITEMS',
  payload: items,
})

export const  appendItem = item => ({
  type: 'POSTS:APPEND_ITEM',
  payload: item,
})

export const  removeItem = id => ({
  type: 'POSTS:REMOVE_ITEM',
  payload: id,
})
