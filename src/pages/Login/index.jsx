import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ButtonEye } from "../../components/ButtonEye";
import { ButtonS, Main } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { formSchema } from "../../validation/login";
import { FiAlertCircle } from "react-icons/fi";
import { NavigateRegister } from "../../components/NavigateRegister";

export const Login = () => {
  const { useEye, onSubmitFunctionLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Main className="animate__animated animate__zoomIn">
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <form onSubmit={handleSubmit(onSubmitFunctionLogin)}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className={errors.email?.message ? "red__input" : ""}
            autoComplete="usename"
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
        </div>
        <span>
          {errors.email?.message && (
            <strong>
              <FiAlertCircle />
            </strong>
          )}
          {errors.email?.message}
        </span>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            autoComplete="current-password"
            className={errors.password?.message ? "red__input" : ""}
            type={useEye}
            id="senha"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <ButtonEye />
        </div>

        <span>
          {errors.password?.message && (
            <strong>
              <FiAlertCircle />
            </strong>
          )}
          {errors.password?.message}
        </span>

        <ButtonS type="submit">Entrar</ButtonS>
        <NavigateRegister />
      </form>
    </Main>
  );
};
