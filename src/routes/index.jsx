import { Routes, Route } from "react-router-dom";
import { DashBord } from "../pages/DashBord";
import { Register } from "../pages/Register";
import { UserContextProvider } from "../contexts/UserContext";
import { Login } from "../pages/Login";
import { ProtectRoutes } from "../components/ProtectRoutes";
import { ModalAddTehnology } from "../components/ModalAddTechnology";

export const RoutesMain = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route element={<ProtectRoutes />}>
          <Route path="dashbord" element={<DashBord />}>
            <Route path="register" element={<ModalAddTehnology />} />
          </Route>
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
};
