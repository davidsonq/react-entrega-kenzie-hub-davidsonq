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
      const Toast = MySwal.mixin({
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

      Toast.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Conta ou senha inválida!`,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        useEye,
        setUseEye,
        onSubmitFunctionLogin,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
