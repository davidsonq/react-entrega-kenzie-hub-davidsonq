import { createContext, useContext, useEffect, useState } from "react";
import { RelativeRoutingType, To, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { api } from "../servers/Api";

interface iUserContextProvider {
  children: React.ReactNode;
}

export interface iTechs {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
}

interface iUserContext {
  useEye: string;
  setUseEye: React.Dispatch<React.SetStateAction<string>>;
  user: iTechs;
  setUser: React.Dispatch<React.SetStateAction<iTechs>>;
  ToastSuccess: typeof Swal;
  ToastError: typeof Swal;
  rend: boolean;
  rendModal: boolean;
  setRend: React.Dispatch<React.SetStateAction<boolean>>;
  setRendModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const UserContext = createContext({} as iUserContext);

export const UserContextProvider = ({ children }: iUserContextProvider) => {
  const [user, setUser] = useState({} as iTechs);
  const [rend, setRend] = useState<boolean>(false);
  const [rendModal, setRendModal] = useState<boolean>(true);

  const [useEye, setUseEye] = useState<string>("password");

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

  useEffect(() => {
    const requestProfile = async () => {
      const isToken: string | null = localStorage.getItem("@KenzieHub:token");
      if (isToken) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${JSON.parse(
            isToken
          )}`;

          const { data } = await api.get<iTechs>("/profile");
          navigate(`dashbord`, { replace: true });
          setUser({ ...data });
          setRendModal(true);
        } catch (error) {
          console.error(error);
        }
      }
    };
    requestProfile();
  }, [rendModal]);

  return (
    <UserContext.Provider
      value={{
        useEye,
        setUseEye,
        user,
        setUser,
        ToastSuccess,
        ToastError,
        rend,
        setRend,
        rendModal,
        setRendModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useProvider = () => useContext(UserContext);
