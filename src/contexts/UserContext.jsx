import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { api } from "../servers/Api";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isToken = localStorage.getItem("@KenzieHub:token");

  const [useEye, setUseEye] = useState("password");

  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const ToastSuccess = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#168821",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  const ToastError = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#B53147",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  const onSubmitFunctionLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);

      const { token, user: userResponse } = response.data;
      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

      localStorage.setItem("@KenzieHub:uuid", JSON.stringify(userResponse.id));

      api.defaults.headers.authorization = `Bearer ${token}`;

      navigate(`dashbord`, { replace: true });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Conta ou senha inválida!`,
      });
    }
  };

  const onSubmitFunctionRegister = async (data) => {
    try {
      const response = await api.post("/users", data);

      ToastSuccess.fire({
        icon: "success",
        title: `Conta cadastrada com sucesso!`,
      });
      navigate("/");
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Email está em uso, Por favor coloque outro email!`,
      });
    }
  };

  const onSubmitFunctionAddTech = async (data) => {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          "Context-Type": "Application/json",
          Authorization: `Bearer ${JSON.parse(isToken)}`,
        },
      });
      navigate("/dashbord");
      ToastSuccess.fire({
        icon: "success",
        title: `Tecnologia cadastrada com sucesso!`,
      });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Tecnologia já cadastrada!`,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        useEye,
        setUseEye,
        onSubmitFunctionLogin,
        onSubmitFunctionRegister,
        onSubmitFunctionAddTech,
        user,
        setUser,
        isToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
