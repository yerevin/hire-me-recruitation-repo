import { createReducer } from '@reduxjs/toolkit';

import { loadTasksRequest, loadTasksSuccess, loadTasksError } from './actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

const tasksReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    // load tasks
    .addCase(loadTasksRequest, (state, action) => ({
      ...state,
      loading: true,
      data: [],
      error: null,
    }))
    .addCase(loadTasksSuccess, (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
      error: null,
    }))
    .addCase(loadTasksError, (state, action) => ({
      ...state,
      loading: false,
      data: [],
      error: action.payload,
    })),
);

export default tasksReducer;
