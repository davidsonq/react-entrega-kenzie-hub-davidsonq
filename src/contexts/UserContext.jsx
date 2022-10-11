import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const [useEye, setUseEye] = useState("password");

  return (
    <UserContext.Provider
      value={{
        useEye,
        setUseEye,
        navigate,
        MySwal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
