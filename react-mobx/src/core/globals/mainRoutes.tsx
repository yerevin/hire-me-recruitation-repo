import React from "react";
import Loadable from "react-loadable";

import { Protected } from "core/components/common";
import { RerouteLogged } from "core/components/common";

function Loading() {
  return <div>Loading...</div>;
}

const Login = Loadable({
  loader: () => import("modules/auth/views/Login"),
  loading: Loading,
});

const Signup = Loadable({
  loader: () => import("modules/auth/views/Signup"),
  loading: Loading,
});

const Tasks = Loadable({
  loader: () => import("modules/task/views/Tasks"),
  loading: Loading,
});

const TaskForm = Loadable({
  loader: () => import("modules/task/views/TaskForm"),
  loading: Loading,
});

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Tasks",
    component: Protected(Tasks),
  },
  { path: "/tasks", name: "Tasks", component: Protected(Tasks) },
  {
    path: "/task",
    exact: true,
    name: "Task create",
    component: Protected(TaskForm),
  },
  {
    path: "/task/:id",
    name: "Task edit",
    component: Protected(TaskForm),
  },
  { path: "/log-in", name: "Login", component: RerouteLogged(Login) },
  { path: "/sign-up", name: "Signup", component: RerouteLogged(Signup) },
];
