import { addEntities } from './entities.duck';

export const COMMENT_ENTITY_TYPE = 'comment';

export const FETCH_COMMENTS_REQUEST = 'app/comments/FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'app/comments/FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_ERROR = 'app/comments/FETCH_COMMENTS_ERROR';

const initialState = {
    fetchCommentsInProgress: false,
    fetchCommentsError: null
};

export default function reducer(state = initialState, action = {}) {
    const { type, payload } = action;
    switch (type) {
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
            }

        default:
            return state
    }
}

export const fetchComments = () => (dispatch, getState, axios) => {
    dispatch({ type: FETCH_COMMENTS_REQUEST });
    return axios.get('comments')
        .then(response => {
            const data = response.data;
            dispatch(addEntities(COMMENT_ENTITY_TYPE, data));
            dispatch({ type: FETCH_COMMENTS_SUCCESS });
            return data;
        }).catch(err => dispatch({ type: FETCH_COMMENTS_ERROR, payload: { e: err } }))
};