import React from "react";

export const Error = ({ errorMessage }) => {
  if (!errorMessage) return null;
  return <p style={{ color: "#f31", margin: "1.6rem 0" }}>{errorMessage}</p>;
};
