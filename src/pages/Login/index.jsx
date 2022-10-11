import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ButtonEye } from "../../components/ButtonEye";
import { ButtonS, Main } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../servers/Api";
import { formSchema } from "../../validation/login";
import { NavigateRegister } from "../../components/NavigateRegister";

export const Login = () => {
  const { useEye, navigate, MySwal } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data) => {
    try {
      const response = await api.post("/sessions", data);

      const { token, user } = response.data;
      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

      localStorage.setItem("@KenzieHub:uuid", JSON.stringify(user.id));

      api.defaults.headers.authorization = `Bearer ${token}`;

      navigate(`dashbord`);
    } catch (error) {
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
    }
  };

  return (
    <Main className="animate__animated animate__zoomIn">
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
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
        <span>{errors.email?.message}</span>
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
        <span>{errors.password?.message}</span>

        <ButtonS type="submit">Entrar</ButtonS>
        <NavigateRegister />
      </form>
    </Main>
  );
};
