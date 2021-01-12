import axios from 'axios';
import { addEntities } from './entities.duck';

export const POST_ENTITY_TYPE = 'post';

export const FETCH_POSTS_REQUEST = 'app/Posts/FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'app/Posts/FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'app/Posts/FETCH_POSTS_ERROR';

const initialState = {
    postRefs: [],
    fetchPostsInProgress: false,
    fetchPostsError: null
};

const postEntityRefs = data => {
    return data.map(d => ({ id: d.id, type: POST_ENTITY_TYPE }));
};

export default function reducer(state = initialState, action = {}) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                fetchPostsInProgress: true,
                fetchPostsError: null,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                fetchPostsInProgress: false,
                postRefs: postEntityRefs(payload),
            };
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                fetchPostsInProgress: false,
                fetchPostsError: payload.e
            }
        default:
            return state
    }
}

export const fetchPosts = () => (dispatch, getState) => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const data = response.data;
            dispatch(addEntities(POST_ENTITY_TYPE, data));
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
            return data;
        }).catch(err => dispatch({ type: FETCH_POSTS_ERROR, payload: { e: err } }))
};