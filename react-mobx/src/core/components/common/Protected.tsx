import React from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

import { authStore } from "core/stores";

export default function Protected(Children) {
  return observer((props) => (
    <div className="authComponent full-height">
      {authStore.token ? (
        <Children {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/log-in",
            state: { from: props.location },
          }}
        />
      )}
    </div>
  ));
}
