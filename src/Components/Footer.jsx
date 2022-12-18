import React from "react";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs | Alguns direitos reservados.</p>
    </footer>
  );
};
