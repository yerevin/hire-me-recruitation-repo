import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { routes } from "core/globals/mainRoutes";

import { authStore } from "core/stores";

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      authStore.token = localStorage.getItem("accessToken");
    }
  }, []);

  return (
    <div className="full-height">
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={(props) => <route.component {...props} />}
          />
        );
      })}
    </div>
  );
};

export { App as default };
