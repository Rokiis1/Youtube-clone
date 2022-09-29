import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { RouteKey } from "./routesKey";

const Router = () => (
  <Routes>
    <Route path={RouteKey.Index} element={<Home />} />
  </Routes>
);

export default Router;
