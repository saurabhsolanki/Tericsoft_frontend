import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import Signup from "../Pages/Signup";
import BMIPage from "../Pages/BMIPage";
import PrivateRoute from "../Components/PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bmi" element={
          <PrivateRoute>
            <BMIPage />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
};

export default AllRoutes;
