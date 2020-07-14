import React from 'react';

import { TasksListContainer } from 'src/modules/task/components/list/tasks-list';
import { Layout } from 'src/core/components/common';

export const Tasks = () => (
  <Layout>
    <TasksListContainer />
  </Layout>
);
