import { Routes, Route } from "react-router-dom";
import { RoutesPath } from "./types/routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import CreateProductPage from "./pages/CreateProductPage";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutesPath.LOGIN} element={<Login />} />
      <Route path={RoutesPath.HOME} element={<Home />} />
      <Route path={RoutesPath.PRODUCT} element={<ProductPage />} />
      <Route path={RoutesPath.CREATEPRODUCT} element={<CreateProductPage />} />
    </Routes>
  );
};
export default Router;
