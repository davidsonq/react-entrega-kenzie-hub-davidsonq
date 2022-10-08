import { Routes, Route, Link } from "react-router-dom";
import { Login } from "../components/Login";
import { NoPage } from "../components/NoPage";
import { Register } from "../components/Register";
export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashbord" element={<Link to={"/"}>Dashbord</Link>} />
      <Route path="cadastro" element={<Register />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};
