import { combineReducers } from "redux";

import posts from 'modules/PostsList/reducer'
import addPost from 'modules/AddForm/reducer'

export default combineReducers({
    posts,
    addPost,
})