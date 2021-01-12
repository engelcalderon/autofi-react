import { addEntities, addEntitiesRelationships } from '../../ducks/entities.duck';

export const POST_ENTITY_TYPE = 'post';
export const COMMENT_ENTITY_TYPE = 'comment';
export const COMMENT_POST_ENTITY_REL_NAME = 'comments';

export const FETCH_POSTS_REQUEST = 'app/PostsPage/FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'app/PostsPage/FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'app/PostsPage/FETCH_POSTS_ERROR';

export const FETCH_COMMENTS_REQUEST = 'app/PostsPage/FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'app/PostsPage/FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_ERROR = 'app/PostsPage/FETCH_COMMENTS_ERROR';

const initialState = {
    postRefs: [],
    fetchPostsInProgress: false,
    fetchPostsError: null,
    fetchCommentsInProgress: false,
    fetchCommentsError: null
};

const postEntityRefs = data => {
    return data.map(d => ({ id: d.id, type: POST_ENTITY_TYPE }));
};

export default function postsPageReducer(state = initialState, action = {}) {
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
            };

        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                fetchCommentsInProgress: true,
                fetchCommentsError: null,
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                fetchCommentsInProgress: false,
            };
        case FETCH_COMMENTS_ERROR:
            return {
                ...state,
                fetchCommentsInProgress: false,
                fetchCommentsError: payload.e
            };
        default:
            return state
    }
}

export const fetchPosts = () => (dispatch, getState, axios) => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    return axios.get('posts')
        .then(response => {
            const data = response.data;
            dispatch(addEntities(POST_ENTITY_TYPE, data));
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
            return data;
        }).catch(err => dispatch({ type: FETCH_POSTS_ERROR, payload: { e: err } }))
};

export const fetchComments = () => (dispatch, getState, axios) => {
    dispatch({ type: FETCH_COMMENTS_REQUEST });
    return axios.get('comments')
        .then(response => {
            const data = response.data;
            dispatch(addEntities(COMMENT_ENTITY_TYPE, data));
            dispatch(addEntitiesRelationships(POST_ENTITY_TYPE, 'postId', COMMENT_POST_ENTITY_REL_NAME, data));
            dispatch({ type: FETCH_COMMENTS_SUCCESS });
            return data;
        }).catch(err => dispatch({ type: FETCH_COMMENTS_ERROR, payload: { e: err } }))
};

export const addComment = values => (dispatch, getState) => {
    const { entities } = getState().entities;
    const nextId = Object.keys(entities[COMMENT_ENTITY_TYPE]).length + 1;
    const comment = { id: nextId, ...values };
    return Promise.resolve()
        .then(() => {
            dispatch(addEntities(COMMENT_ENTITY_TYPE, [comment]));
            dispatch(addEntitiesRelationships(POST_ENTITY_TYPE, 'postId', COMMENT_POST_ENTITY_REL_NAME, [comment]));
        });
};