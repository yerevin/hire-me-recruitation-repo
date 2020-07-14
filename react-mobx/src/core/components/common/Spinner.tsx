import React from "react";

export const Spinner = (props) => (
  <h1 className={`${props.whiteColor && "text-white"} text-center`}>
    <i className="fa fa-spin fa-spinner" />
  </h1>
);
