import React from "react";

import { AppHeader } from "core/components/common";

export const Layout = ({ children }) => (
  <div>
    <AppHeader />

    <div className="wrapper container">{children}</div>
  </div>
);
