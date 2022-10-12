import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ButtonEye } from "../../components/ButtonEye";
import { ButtonRegister, Main } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { formSchema } from "../../validation/register";
import { FiAlertCircle } from "react-icons/fi";

export const Register = () => {
  const { useEye, onSubmitFunctionRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const name = watch("name");
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const bio = watch("bio");
  const contact = watch("contact");

  const isValid =
    name && email && password && confirmPassword && bio && contact;

  return (
    <Main className="animate__animated animate__zoomIn">
      <header>
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
        <Link to={"/"}>Voltar</Link>
      </header>
      <form onSubmit={handleSubmit(onSubmitFunctionRegister)}>
        <h2>Crie sua conta</h2>
        <h3>Rápido e grátis, vamos nessa</h3>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            className={errors.name?.message ? "red__input" : ""}
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
        </div>

        <span>
          {errors.name?.message && <FiAlertCircle />}
          <strong>{errors.name?.message}</strong>
        </span>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className={errors.email?.message ? "red__input" : ""}
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
        </div>
        <span>
          {errors.email?.message && <FiAlertCircle />}
          <strong>{errors.email?.message}</strong>
        </span>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            className={errors.password?.message ? "red__input" : ""}
            type={useEye}
            id="senha"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <ButtonEye />
        </div>
        <span>
          {errors.password?.message && <FiAlertCircle />}
          <strong>{errors.password?.message}</strong>
        </span>

        <div>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            className={errors.confirmPassword?.message ? "red__input" : ""}
            type={useEye}
            id="confirmPassword"
            placeholder="Digite a confirmação de senha"
            {...register("confirmPassword")}
          />
          <ButtonEye />
        </div>
        <span>
          {errors.confirmPassword?.message && <FiAlertCircle />}
          <strong>{errors.confirmPassword?.message}</strong>
        </span>

        <div>
          <label htmlFor="bio">Bio</label>
          <input
            className={errors.bio?.message ? "red__input" : ""}
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
        </div>
        <span>
          {errors.bio?.message && <FiAlertCircle />}
          <strong>{errors.bio?.message}</strong>
        </span>

        <div>
          <label htmlFor="contact">Contato</label>
          <input
            className={errors.contact?.message ? "red__input" : ""}
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />
        </div>
        <span>
          {errors.contact?.message && <FiAlertCircle />}
          <strong>{errors.contact?.message}</strong>
        </span>

        <div>
          <label htmlFor="course_module">Selecionar módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>
        </div>

        <ButtonRegister
          className={!isValid ? "" : "animate__animated  animate__pulse"}
          isValid={!isValid}
          type="submit"
        >
          Cadastrar
        </ButtonRegister>
      </form>
    </Main>
  );
};
