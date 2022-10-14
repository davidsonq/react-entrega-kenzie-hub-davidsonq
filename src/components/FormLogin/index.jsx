import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "../../validation/login";
import { NavigateRegister } from "../NavigateRegister";
import { FiAlertCircle } from "react-icons/fi";
import { ButtonEye } from "../ButtonEye";
import { ButtonS } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { InputStyle } from "../../styles/InputStyle";

export const FormLogin = ({ onSubmitFunctionLogin }) => {
  const { useEye } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmitFunctionLogin)}>
      <h2>Login</h2>
      <InputStyle>
        <label htmlFor="email">Email</label>
        <input
          className={errors.email?.message ? "red__input" : ""}
          autoComplete="usename"
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
      </InputStyle>
      <span>
        {errors.email?.message && (
          <strong>
            <FiAlertCircle />
          </strong>
        )}
        {errors.email?.message}
      </span>
      <InputStyle>
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
      </InputStyle>
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
  );
};
