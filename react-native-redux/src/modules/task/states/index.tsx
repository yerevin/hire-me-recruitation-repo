import { combineReducers } from 'redux';

import tasksReducer from './tasks/reducers';

export const task = combineReducers({
  tasks: tasksReducer,
});
