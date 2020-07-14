import React from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

import { authStore } from "core/stores";

export default function RerouteLogged(Children) {
  return observer((props) => (
    <div className="authComponent full-height">
      {authStore.token ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      ) : (
        <Children {...props} />
      )}
    </div>
  ));
}
