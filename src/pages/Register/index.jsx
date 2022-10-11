import { Link, useNavigate } from "react-router-dom";
import { api } from "../../servers/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { ButtonEye } from "../../components/ButtonEye";
import { ButtonRegister, Main } from "./style";

export const Register = () => {
  const [useAnimationRegister, setUseAnimationRegister] = useState(
    "animate__animated animate__backInDown"
  );
  const navigate = useNavigate();
  const [useEye, setUseEye] = useState("password");
  const MySwal = withReactContent(Swal);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome é obrigatório")
      .min(3, "Nome tem que ter no minimo 3 caracteres"),
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Email inválido!"),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .matches(/[A-Z]/, "Senha com pelos menos uma letra maiúscula")
      .matches(/[a-z]/, "Senha com pelos menos uma letra minúscula")
      .matches(/[0-9]/, "Senha com pelos menos um numero")
      .matches(/\W|_/, "Senha com pelos menos um caractere especial")
      .min(8, "Senha com no minimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual senha"
      ),
    bio: yup.string().required("Bio é obrigatório"),
    contact: yup.string().required("Contato é obrigatório"),
    course_module: yup.string(),
    button: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual senha"
      ),
  });

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
  const onSubmitFunction = (data) => {
    api
      .post("/users", data)
      .then((res) => {
        const Toast = MySwal.mixin({
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

        Toast.fire({
          icon: "success",
          title: `Conta cadastrada com sucesso!`,
        });

        setUseAnimationRegister("animate__animated  animate__fadeOut");
        setTimeout(() => {
          navigate("/");
          setUseAnimationRegister("animate__animated animate__backInDown");
        }, 500);
      })
      .catch((err) => {
        const Toast = MySwal.mixin({
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

        Toast.fire({
          icon: "error",
          iconColor: "#EC8697",
          title: `Email está em uso, Por favor coloque outro email!`,
        });
      });
  };
  return (
    <Main className={useAnimationRegister}>
      <header>
        <figure className={!isValid ? "" : "animate__animated  animate__tada"}>
          <img src={Logo} alt="Logo" />
        </figure>
        <Link
          onClick={() => {
            setUseAnimationRegister("animate__animated  animate__backOutDown");
            setTimeout(() => {
              navigate("/");
              setUseAnimationRegister("animate__animated animate__backInDown");
            }, 900);
          }}
        >
          Voltar
        </Link>
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
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
        <span>{errors.name?.message}</span>
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

        <span>{errors.email?.message}</span>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            className={errors.password?.message ? "red__input" : ""}
            type={useEye}
            id="senha"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <ButtonEye useEye={useEye} setUseEye={setUseEye} />
        </div>

        <span>{errors.password?.message}</span>
        <div>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            className={errors.confirmPassword?.message ? "red__input" : ""}
            type={useEye}
            id="confirmPassword"
            placeholder="Digite a confirmação de senha"
            {...register("confirmPassword")}
          />
          <ButtonEye useEye={useEye} setUseEye={setUseEye} />
        </div>

        <span>{errors.confirmPassword?.message}</span>
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

        <span>{errors.bio?.message}</span>
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

        <span>{errors.contact?.message}</span>
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
