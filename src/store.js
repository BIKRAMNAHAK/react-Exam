import { createStore, applyMiddleware, compose } from 'redux';

import { rootreducer } from './Services/Services';
import { thunk } from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootreducer,
    composeEnhancers(applyMiddleware(thunk))
);
