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

export const Login = () => {
  const navigate = useNavigate();
  const [useEye, setUseEye] = useState("password");
  const MySwal = withReactContent(Swal);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Email inválido!"),
    password: yup.string().required("Senha é obrigatória"),
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
      .post("/sessions", data)
      .then((res) => {
        if (!!res.data.token) {
          localStorage.setItem(
            "@KenzieHub:token",
            JSON.stringify(res.data.token)
          );
          localStorage.setItem(
            "@KenzieHub:uuid",
            JSON.stringify(res.data.user.id)
          );
          navigate(`dashbord/${res.data.user.id}`);
        }
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
          title: `Conta ou senha inválida!`,
        });
      });
  };
  return (
    <section>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>

        <input
          autoComplete="usename"
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <label htmlFor="email">Email</label>
        <span>{errors.email?.message}</span>

        <input
          autoComplete="current-password"
          type={useEye}
          id="senha"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <label htmlFor="senha">Senha</label>
        <span>{errors.password?.message}</span>

        <ButtonEye useEye={useEye} setUseEye={setUseEye} />
        <button type="submit">Entrar</button>
      </form>
      <div>
        <p>Ainda não possui uma conta?</p>
        <Link to={"cadastro"}>Cadastre-se</Link>
      </div>
    </section>
  );
};
