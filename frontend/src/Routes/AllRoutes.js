import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Products from "../pages/product/Products";
import AdminPage from "../pages/Admin/MainPage/AdminPage";
import { Register } from "../pages/register/Register";
import { Login } from "../pages/login/Login";
import CartItem from "../pages/CartItem/CartItem";
import AdminLogin from "../pages/Admin/MainPage/AdminLogin";
import SingleProduct from "../pages/product/SingleProduct";
import Address from "../pages/Address/Address";
// import AdminLogin from "../pages/Admin/MainPage/AdminLogin";


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart/address" element={<Address />} />

            <Route path="/cart" element={<CartItem />} />
            {/* <Route path="/adminlogin" element={<AdminLogin/>} /> */}
        </Routes>
    );
};
