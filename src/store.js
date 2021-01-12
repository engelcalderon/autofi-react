import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const dev = !process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === "development";

const store = (initialState = {}, axios = null) => {

    const middlewares = [thunk.withExtraArgument(axios)]

    const composeEnhancers =
        dev && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : compose;

    return createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));
};

export default store;