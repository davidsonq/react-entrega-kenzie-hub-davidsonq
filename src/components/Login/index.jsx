import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import { api } from "../../servers/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Login = () => {
  const [useEye, setUseEye] = useState("password");
  const MySwal = withReactContent(Swal);
  const [isToken, setIsToken] = useState(false);
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido!"),
    password: yup.string().required("Senha obrigatória"),
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
            title: `Logado com sucesso!`,
          });
          localStorage.setItem("@KenzieHub:token", res.data.token);
          localStorage.setItem("@KenzieHub:uuid", res.data.user.id);
          setTimeout(() => setIsToken(true), 500);
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
      {isToken && <Navigate to="dashbord" replace={true} />}
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>
        <div>
          <input
            autoComplete="usename"
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <label htmlFor="email">Email</label>
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <input
            autoComplete="current-password"
            type={useEye}
            id="senha"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <label htmlFor="senha">Senha</label>
          <span>{errors.password?.message}</span>
        </div>
        <button
          onClick={() => {
            if (useEye === "password") {
              return setUseEye("text");
            }
            return setUseEye("password");
          }}
          type="button"
        >
          {useEye === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
        <button type="submit">Entrar</button>
      </form>
      <div>
        <p>Ainda não possui uma conta?</p>
        <Link to={"Cadastro"}>Cadastre-se</Link>
      </div>
    </section>
  );
};
