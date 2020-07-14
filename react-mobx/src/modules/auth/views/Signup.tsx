import React from "react";
import { observer } from "mobx-react";

import { authStore } from "core/stores";

import { Spinner, AppHeader } from "core/components/common";

import { SignupForm } from "modules/auth/components/signup/form";

const Signup = observer(() => (
  <div>
    <AppHeader />

    {authStore.loading ? <Spinner /> : <SignupForm />}
  </div>
));

export { Signup as default };
