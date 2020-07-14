import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { authStore } from "core/stores";

import { FormGroupWithInput } from "core/components/common";

export const SignupForm = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [t] = useTranslation();

  return (
    <div className="col-md-12">
      <div className="row justify-content-md-center">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form className="login__form" name="registerForm">
            <FormGroupWithInput
              propName="email"
              type="email"
              label={t("auth.email")}
              placeholder={t("auth.email")}
              onChange={(e, value) => setEmail(value)}
              defaultValue={email}
            />

            <FormGroupWithInput
              propName="password"
              type="password"
              label={t("auth.password")}
              placeholder={t("auth.password")}
              onChange={(e, value) => setPassword(value)}
              defaultValue={password}
            />

            <FormGroupWithInput
              propName="confirm-password"
              type="password"
              label={t("auth.confirm-password")}
              placeholder={t("auth.confirm-password")}
              onChange={(e, value) => setConfirmPassword(value)}
              defaultValue={confirmPassword}
            />

            <button
              className="btn btn-block btn-primary"
              onClick={() =>
                authStore.register({
                  email,
                  password,
                  confirmPassword,
                })
              }
            >
              {t("auth.register")}
            </button>

            <Link className="btn btn-block btn-primary" to={"/log-in"}>
              {t("auth.log-in")}
            </Link>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
});
