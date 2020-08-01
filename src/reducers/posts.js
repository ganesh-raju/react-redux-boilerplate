import { GET_POSTS, GET_POSTS_ERROR, HIDE_POSTS } from '../actions/posts/types'

const initialState ={
    loading: true,
    data: []
}

export default function(state = initialState, action){

    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                data: null
            }
      case HIDE_POSTS:
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          data: action.payload
        }
        default:
            return state;
    }
}
