import { createAction } from '@reduxjs/toolkit';

export const loadTasksRequest = createAction<null, 'loadTasksRequest'>(
  'loadTasksRequest',
);
export const loadTasksSuccess = createAction<any, 'loadTasksSuccess'>(
  'loadTasksSuccess',
);
export const loadTasksError = createAction<any, 'loadTasksError'>(
  'loadTasksError',
);

