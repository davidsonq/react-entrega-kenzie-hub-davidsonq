import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [rend, setRend] = useState(false);

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

  return (
    <UserContext.Provider
      value={{
        useEye,
        setUseEye,
        user,
        setUser,
        isToken,
        ToastSuccess,
        ToastError,
        navigate,
        rend,
        setRend,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useProvider = () => useContext(UserContext);
