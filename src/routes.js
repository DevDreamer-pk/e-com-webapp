import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./modules/home/index";
import Login from "./modules/login/index";
import SignUp from "./modules/signUp/index";
import Header from "./modules/header/index";
import Strava from "./modules/strava/index";
import Demo from "./modules/demo/index";
import Footer from "./modules/footer/index";
import Users from "./modules/users/index";
import SignIn from "./modules/signIn";
import CreateAccount from "./modules/createAccount";
import Profile from "./modules/profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/header" element={<Header />} />
      <Route path="/login" element={<Login />} />
      <Route path="/strava" element={<Strava />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/users" element={<Users />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
