import { Routes, Route } from "react-router-dom";
import { DashBord } from "../components/DashBord";
import { Login } from "../components/Login";
import { NoPage } from "../components/NoPage";
import { Register } from "../components/Register";
export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashbord/:id" element={<DashBord />} />
      <Route path="cadastro" element={<Register />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};
