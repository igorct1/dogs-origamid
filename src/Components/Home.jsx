import React from "react";
import { Feed } from "./Feed/Feed";
import { Head } from "./Helper/Head";

import { Loading } from "./Helper/Loading";
export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" />
      <Feed />
    </section>
  );
};
