import { Main } from "./style";
import { iTechs, useProvider } from "../../contexts/UserContext";
import { api } from "../../servers/Api";
import { FormLogin } from "../../components/FormLogin";
import { useNavigate } from "react-router-dom";
interface iLogin {
  user: iTechs;
  token: string;
}
export const Login = () => {
  const { setUser, setRendModal, ToastError } = useProvider();
  const navigate = useNavigate();

  const onSubmitFunctionLogin = async (data: {}) => {
    setRendModal(false);

    try {
      const response = await api.post<iLogin>("/sessions", data);

      const { token, user: userResponse } = response.data;
      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

      localStorage.setItem("@KenzieHub:uuid", JSON.stringify(userResponse.id));
      setUser(userResponse);
      setRendModal(true);
      navigate(`dashbord`, { replace: true });
    } catch (error) {
      setRendModal(true);
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Conta ou senha inválida!`,
      });
    }
  };

  return (
    <>
      <Main className="animate__animated animate__zoomIn">
        <figure>
          <img src={require("../../assets/Logo.svg").default} alt="Logo" />
        </figure>
        <FormLogin onSubmitFunctionLogin={onSubmitFunctionLogin} />
      </Main>
    </>
  );
};
