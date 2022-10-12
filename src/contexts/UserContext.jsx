import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { api } from "../servers/Api";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
      setUser(userResponse);
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

      const { name } = response.data;

      ToastSuccess.fire({
        icon: "success",
        title: `Parabéns ${name} conta criada com sucesso!`,
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
  return (
    <UserContext.Provider
      value={{
        useEye,
        setUseEye,
        onSubmitFunctionLogin,
        onSubmitFunctionRegister,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
