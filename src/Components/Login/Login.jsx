import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordLost } from "./LoginPasswordLost.jsx";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import { Error404 } from "../Error404";

export const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login) return <Navigate to="/account" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </section>
  );
};
