import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import HouseDetails from "../pages/HouseDetails";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import HouseList from "../pages/HouseList";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import NewHouseForm from "../pages/NewHouseForm";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<HouseList />} />
      <Route path="/house/:id" element={<HouseDetails />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newform" element={<NewHouseForm/>} />
      <Route path="register" element={<RegisterPage/>} />
    </Routes>
  );
};

export default Routers;
