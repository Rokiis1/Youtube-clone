import { Routes, Route } from "react-router-dom";
import Search from "../pages/Search";
import Home from "../pages/Home";
import { RouteKey } from "./routesKey";
import Watch from "../pages/Watch";

const Router = () => (
  <Routes>
    <Route path={RouteKey.Index} element={<Home />} />
    <Route path={RouteKey.Search} element={<Search />} />
    <Route path={RouteKey.Watch} element={<Watch />} />
  </Routes>
);

export default Router;
