import { Link } from "react-router-dom";
import { ContainerRegister } from "./style";

export const NavigateRegister = () => (
  <ContainerRegister>
    <p>Ainda não possui uma conta?</p>
    <Link to={"cadastro"}>Cadastre-se</Link>
  </ContainerRegister>
);
