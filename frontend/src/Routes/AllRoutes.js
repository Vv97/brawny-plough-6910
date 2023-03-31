import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Products from "../pages/product/Products";
import AdminPage from "../pages/Admin/MainPage/AdminPage";


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<AdminPage/>} />
        </Routes>
    );
};
