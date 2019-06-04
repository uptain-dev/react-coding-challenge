import { createStore, applyMiddleware } from 'redux';
import { rootInitialState, rootReducers } from '../reducers';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from '../epics';

const epicMiddleware = createEpicMiddleware();

export const store = createStore(rootReducers, rootInitialState, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpics);
