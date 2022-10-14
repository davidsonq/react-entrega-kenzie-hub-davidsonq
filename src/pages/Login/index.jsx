import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { Main } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { api } from "../../servers/Api";
import { FormLogin } from "../../components/FormLogin";

export const Login = () => {
  const { ToastError, isToken, setRend, navigate } = useContext(UserContext);

  const onSubmitFunctionLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);

      const { token, user: userResponse } = response.data;
      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

      localStorage.setItem("@KenzieHub:uuid", JSON.stringify(userResponse.id));

      api.defaults.headers.authorization = `Bearer ${token}`;
      setRend(false);
      navigate(`dashbord`, { replace: true });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Conta ou senha inválida!`,
      });
    }
  };

  if (!!isToken) {
    return <Navigate to={"dashbord"} />;
  }

  return (
    <Main className="animate__animated animate__zoomIn">
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <FormLogin onSubmitFunctionLogin={onSubmitFunctionLogin} />
    </Main>
  );
};
