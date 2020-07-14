import React from "react";
import Loadable from "react-loadable";

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

export const routes = [
  { path: "/log-in", name: "Login", component: Login },
  { path: "/sign-up", name: "Signup", component: Signup },
];
