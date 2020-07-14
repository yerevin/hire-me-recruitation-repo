import React from "react";

import { Layout } from "core/components/common";

import { TaskFormContainer } from "modules/task/components";

const Tasks = () => (
  <Layout>
    <TaskFormContainer />
  </Layout>
);

export { Tasks as default };
