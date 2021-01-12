import mapKeys from 'lodash/mapKeys';
import merge from 'lodash/merge';

export const ADD_ENTITIES = 'app/entities/ADD_ENTITIES';

const initialState = {
    entities: {},
};

export default function reducer(state = initialState, action = {}) {
    const { type, payload } = action;
    switch (type) {
        case ADD_ENTITIES:
            return {
                ...state,
                entities: merge(state.entities, payload)
            };
        default:
            return state
    }
};

export const getEntities = (state, entityRefs) => {
    const { entities } = state.entities;
    return entityRefs.map(ref => {
        const { type, id } = ref;
        const groupEntities = entities[type];
        return groupEntities[id]
    });
}

export const addEntities = (type, data) => (dispatch, getState) => {
    dispatch({
        type: ADD_ENTITIES,
        payload: {
            [type]: { ...mapKeys(data, 'id') }
        }
    });
};