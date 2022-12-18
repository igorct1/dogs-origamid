import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import { User } from "./Components/User/User";
import { ProtectedRoute } from "./Components/Helper/ProtectedRoute";
import { Photo } from "./Components/Photo/Photo";
import { UserProfile } from "./Components/User/UserProfile";
import { Error404 } from "./Components/Error404";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route
                path="/account/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="/photo/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
