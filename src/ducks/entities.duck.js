export const ADD_ENTITIES = 'app/entities/ADD_ENTITIES';

const initialState = {
    entities: {},
};

export default function reducer(state = initialState, action = {}) {
    const { type } = action;
    switch (type) {
        case ADD_ENTITIES:
            return {
                ...state
            };
        default:
            return state
    }
}