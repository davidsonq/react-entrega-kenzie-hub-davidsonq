import { Routes, Route } from "react-router-dom";
import { NoPage } from "../components/NoPage";
import { DashBord } from "../pages/DashBord";
import { Register } from "../pages/Register";
import { UserContextProvider } from "../contexts/UserContext";
import { Login } from "../pages/Login";
export const RoutesMain = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashbord" element={<DashBord />} />
        <Route path="cadastro" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </UserContextProvider>
  );
};
