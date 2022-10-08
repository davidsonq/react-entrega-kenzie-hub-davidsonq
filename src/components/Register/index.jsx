import { Link, useNavigate } from "react-router-dom";
import { api } from "../../servers/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { ButtonEye } from "../ButtonEye";

export const Register = () => {
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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
          icon: "sucess",
          title: `Conta cadastrada com sucesso!`,
        });

        navigate("/");
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
    <section>
      <header>
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
        <Link to={"/"}>Voltar</Link>
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <h3>Rápido e grátis, vamos nessa</h3>

        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="senha">Senha</label>
        <input
          type={useEye}
          id="senha"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
        <ButtonEye useEye={useEye} setUseEye={setUseEye} />

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type={useEye}
          id="confirmPassword"
          placeholder="Digite a confirmação de senha"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>
        <ButtonEye useEye={useEye} setUseEye={setUseEye} />

        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <span>{errors.bio?.message}</span>

        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>

        <label htmlFor="course_module">Selecionar módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        <span>{errors.course_module?.message}</span>

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};
