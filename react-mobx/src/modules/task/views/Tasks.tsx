import React from "react";

import { Layout } from "core/components/common";

import { TasksListContainer } from "modules/task/components";

const Tasks = () => (
  <Layout>
    <TasksListContainer />
  </Layout>
);

export { Tasks as default };
