import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "../../validation/register";
import { FiAlertCircle } from "react-icons/fi";
import { ButtonEye } from "../ButtonEye";
import { ButtonRegister } from "./style";
import { useProvider } from "../../contexts/UserContext";
import { InputStyle } from "../../styles/InputStyle";
import { SelectStyle } from "../../styles/SelectStyle";
interface iFormRegister {
  onSubmitFunctionRegister: (data: {}) => void;
}
export const FormRegister = ({ onSubmitFunctionRegister }: iFormRegister) => {
  const { useEye } = useProvider();
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
    <form onSubmit={handleSubmit(onSubmitFunctionRegister)}>
      <h2>Crie sua conta</h2>
      <h3>Rápido e grátis, vamos nessa</h3>
      <InputStyle>
        <label htmlFor="name">Nome</label>
        <input
          className={errors.name?.message ? "red__input" : ""}
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
      </InputStyle>
      <span>
        <>{errors.name?.message && <FiAlertCircle />}</>

        <strong>
          <>{errors.name?.message}</>
        </strong>
      </span>
      <InputStyle>
        <label htmlFor="email">Email</label>
        <input
          className={errors.email?.message ? "red__input" : ""}
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
      </InputStyle>
      <span>
        <>{errors.email?.message && <FiAlertCircle />}</>
        <strong>
          <>{errors.email?.message}</>
        </strong>
      </span>
      <InputStyle>
        <label htmlFor="senha">Senha</label>
        <input
          className={errors.password?.message ? "red__input" : ""}
          type={useEye}
          id="senha"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <ButtonEye />
      </InputStyle>
      <span>
        <>{errors.password?.message && <FiAlertCircle />}</>
        <strong>
          <>{errors.password?.message}</>
        </strong>
      </span>
      <InputStyle>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          className={errors.confirmPassword?.message ? "red__input" : ""}
          type={useEye}
          id="confirmPassword"
          placeholder="Digite a confirmação de senha"
          {...register("confirmPassword")}
        />
        <ButtonEye />
      </InputStyle>
      <span>
        {errors.confirmPassword?.message && <FiAlertCircle />}
        <strong>
          <>{errors.confirmPassword?.message}</>
        </strong>
      </span>
      <InputStyle>
        <label htmlFor="bio">Bio</label>
        <input
          className={errors.bio?.message ? "red__input" : ""}
          id="bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
      </InputStyle>
      <span>
        {errors.bio?.message && <FiAlertCircle />}
        <strong>
          <>{errors.bio?.message}</>
        </strong>
      </span>
      <InputStyle>
        <label htmlFor="contact">Contato</label>
        <input
          className={errors.contact?.message ? "red__input" : ""}
          type="text"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
      </InputStyle>
      <span>
        {errors.contact?.message && <FiAlertCircle />}
        <strong>
          <>{errors.contact?.message}</>
        </strong>
      </span>
      <SelectStyle>
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
      </SelectStyle>
      <ButtonRegister
        className={!isValid ? "" : "animate__animated  animate__pulse"}
        isValid={!isValid}
        cursoPoint={isValid === ""}
        type="submit"
        disabled={isValid === ""}
      >
        Cadastrar
      </ButtonRegister>
    </form>
  );
};
