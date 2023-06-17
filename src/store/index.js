import { createStore, applyMiddleware } from 'redux';

import createSagaMidleware from "redux-saga";

import rootReducers from './modules/rootReducers';
import rootSaga from './modules/rootSaga';

const sagaMidleware = createSagaMidleware();

const store = createStore(rootReducers, applyMiddleware(sagaMidleware));

sagaMidleware.run(rootSaga);

export default store;