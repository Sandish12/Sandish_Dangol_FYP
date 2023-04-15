import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import About from "../pages/About";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import HouseList from "../pages/HouseList";

import LoginPage from "../pages/LoginPage";
import NewHouseForm from "../pages/NewHouseForm";
import RegisterPage from "../pages/Register";
import Rooms from "../pages/Rooms";
import HouseDetails from "../pages/HouseDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />


      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/house/:id" element={<HouseDetails />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newform" element={<NewHouseForm />} />
      <Route path="register" element={<RegisterPage />} />

    </Routes>
  );
};

export default Routers;
