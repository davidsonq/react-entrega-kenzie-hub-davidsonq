import { Link } from "react-router-dom";
import { Main } from "./style";
import { useProvider } from "../../contexts/UserContext";
import { api } from "../../servers/Api";
import { FormRegister } from "../../components/FormRegister";

export const Register = () => {
  const { ToastSuccess, navigate, ToastError } = useProvider();

  const onSubmitFunctionRegister = async (data: {}) => {
    try {
      await api.post("/users", data);

      ToastSuccess.fire({
        icon: "success",
        title: `Conta cadastrada com sucesso!`,
      });

      navigate("/", { replace: true });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Email está em uso, Por favor coloque outro email!`,
      });
    }
  };

  return (
    <Main className="animate__animated animate__zoomIn">
      <header>
        <figure>
          <img src={require("../../assets/Logo.svg").default} alt="Logo" />
        </figure>
        <Link to={"/"}>Voltar</Link>
      </header>
      <FormRegister onSubmitFunctionRegister={onSubmitFunctionRegister} />
    </Main>
  );
};
