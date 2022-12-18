import React from "react";
import { UserHeaderNav } from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

export const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/account":
        setTitle("Minha conta");
        break;
      case "/account/statistics":
        setTitle("Estatísticas");
        break;
      case "/account/post":
        setTitle("Poste sua foto");
        break;
      default:
        return;
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
