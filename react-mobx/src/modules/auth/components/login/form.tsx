import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { authStore } from "core/stores";

import { FormGroupWithInput } from "core/components/common";

export const LoginForm = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [t] = useTranslation();

  return (
    <div className="col-md-12">
      <div className="row justify-content-md-center">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form className="login__form" name="loginForm">
            <FormGroupWithInput
              propName="email"
              type="email"
              label={t("auth.email")}
              placeholder={t("auth.email")}
              onChange={(propName, value) => setEmail(value)}
              defaultValue={email}
            />

            <FormGroupWithInput
              propName="password"
              type="password"
              label={t("auth.password")}
              placeholder={t("auth.password")}
              onChange={(propName, value) => setPassword(value)}
              defaultValue={password}
            />

            <button
              className="btn btn-block btn-primary"
              onClick={() =>
                authStore.login({
                  email,
                  password,
                })
              }
              type="submit"
              id="loginBtn"
            >
              {t("auth.log-in")}
            </button>

            <Link className="btn btn-block btn-primary" to={"/sign-up"}>
              {t("auth.register")}
            </Link>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
});
