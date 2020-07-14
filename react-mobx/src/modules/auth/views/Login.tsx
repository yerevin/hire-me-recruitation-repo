import React from "react";
import { observer } from "mobx-react";

import { authStore } from "core/stores";

import { Spinner, AppHeader } from "core/components/common";

import { LoginForm } from "modules/auth/components/login/form";

const Login = observer(() => (
  <div>
    <AppHeader />

    {authStore.loading ? <Spinner /> : <LoginForm />}
  </div>
));

export { Login as default };
