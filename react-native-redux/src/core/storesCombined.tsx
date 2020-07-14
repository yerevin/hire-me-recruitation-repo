import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true });

import { auth } from 'src/modules/auth/states';
import { task } from 'src/modules/task/states';

let store = createStore(
  combineReducers({
    auth: auth,
    task: task,
  }),
  applyMiddleware(thunk, logger),
);

export default store;
