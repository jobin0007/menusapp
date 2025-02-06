import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminPage/AdminLogin";
import AdminDashBoard from "./pages/AdminPage/AdminDashBoard";
import GetMenu from "./pages/GetMenu";
import AddMenu from "./pages/AddMenu.jsx"; 
import Menu from "./pages/Menu";
import AddsMenuItem from "./pages/AddsMenuItem"; 

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<GetMenu />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/admin/:id" element={<AdminDashBoard />}>
        <Route path="add-menu" element={<AddMenu />} />
        <Route path="get-menu" element={<Menu />} />
      </Route>

      <Route path="/add-menu-items/:menuId" element={<AddsMenuItem />} />
    </Routes>
  );
};

export default Router;
