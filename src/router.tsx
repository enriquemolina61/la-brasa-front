import { Routes, Route } from "react-router-dom";
import { RoutesPath } from "./types/routes";
import Home from "./pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutesPath.Home} element={<Home />} />
    </Routes>
  );
};
export default Router;
