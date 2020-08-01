import axios from 'axios'
import { GET_POSTS, GET_POSTS_ERROR, HIDE_POSTS } from './types';

export const getPosts = () => async dispatch => {

    try {
        const res = await axios.get('https://www.fakerestapi.com/api/v1/todo_lists');
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_POSTS_ERROR,
            payload: err
        })
    }
}

export const hidePosts = () => dispatch => {
  dispatch({
    type: HIDE_POSTS,
    payload: []
  })
}
