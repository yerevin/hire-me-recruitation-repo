import React from "react";
import { observer } from "mobx-react";
import { NavLink, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { authStore } from "core/stores";

const Navbar = observer(() => {
  const [t] = useTranslation();

  return (
    <ul className="navbar-nav">
      {authStore.token && (
        <li className="nav-item">
          <NavLink className="nav-link" to={`/`}>
            {t("task.list-title")}
          </NavLink>
        </li>
      )}
      <li className="nav-item">
        {authStore.token ? (
          <a
            className="nav-link"
            id="logoutNavBtn"
            href="/"
            onClick={authStore.logout}
          >
            {t("auth.log-out")}
          </a>
        ) : (
          <NavLink className="nav-link" to={`/log-in`}>
            {t("auth.log-in")}
          </NavLink>
        )}
      </li>
    </ul>
  );
});

export const AppHeader = withRouter(
  observer(() => {
    return (
      <nav className="navbar navbar-dark navbar-expand-sm bg-dark" style={{width: "100%"}}>
        <div className="container">
            <a className="navbar-brand" href="/">
              TO DO
            </a>
            <button
              className={`navbar-toggler toggle-menu-button ${
                authStore.toggleMenu && "collapsed"
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                authStore.toggleMenu = !authStore.toggleMenu;
              }}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`navbar-collapse collapse ${
                authStore.toggleMenu && "show"
              }`}
              id="navbarNavAltMarkup"
            >
              <Navbar />
            </div>
          </div>
      </nav>
    );
  })
);
