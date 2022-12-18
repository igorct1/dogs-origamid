import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserHeader } from "./UserHeader";
import { Feed } from "../Feed/Feed";

import { UserPhotoPost } from "./UserPhotoPost";
import { UserStats } from "./UserStats";
import { UserContext } from "../../UserContext";
import { Error404 } from "../Error404";
import { Head } from "../Helper/Head";

export const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/statistics" element={<UserStats />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </section>
  );
};
