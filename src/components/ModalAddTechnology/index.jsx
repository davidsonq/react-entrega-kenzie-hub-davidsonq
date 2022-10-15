import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useProvider } from "../../contexts/UserContext";
import { api } from "../../servers/Api";
import { formSchema } from "../../validation/registerTechnology";
import { AsideS } from "../../styles/ModalStyle";
import { InputStyle } from "../../styles/InputStyle";
import { SelectStyle } from "../../styles/SelectStyle";
import { ButtonS } from "../FormLogin/style";
import { useState } from "react";

export const ModalAddTechnology = () => {
  const { rend, isToken, setRend, navigate, ToastSuccess, ToastError } =
    useProvider();
  const [isInAnimation, setIsInAnimation] = useState(
    "animate__animated animate__jackInTheBox"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunctionAddTech = async (data) => {
    const dataTrim = data.title.trim();

    const dataNewFormat = { ...data, title: dataTrim };

    try {
      await api.post("/users/techs", dataNewFormat, {
        headers: {
          "Context-Type": "Application/json",
          Authorization: `Bearer ${JSON.parse(isToken)}`,
        },
      });
      navigate("/dashbord");
      setRend(false);
      if (rend) {
        ToastSuccess.fire({
          icon: "success",
          title: `Tecnologia cadastrada com sucesso!`,
        });
      }
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Tecnologia já cadastrada!`,
      });
    }
  };

  const handleAimation = () => {
    setIsInAnimation("animate__animated animate__bounceOut");
    setTimeout(() => {
      setIsInAnimation("animate__animated animate__jackInTheBox");
      navigate("/dashbord");
    }, 900);
  };

  return (
    <AsideS>
      <div className={isInAnimation}>
        <div>
          <h3>Cadastrar Tecnologia</h3>
          <Link onClick={handleAimation}>X</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunctionAddTech)}>
          <InputStyle>
            <label htmlFor="name">Nome</label>
            <input
              className={errors.title?.message ? "red__input" : ""}
              type="text"
              id="name"
              {...register("title")}
              placeholder="Digite nome da tecnologia"
            />
          </InputStyle>
          {errors.title?.message && (
            <span>
              <FiAlertCircle />
              <strong>{errors.title?.message}</strong>
            </span>
          )}

          <SelectStyle>
            <label htmlFor="course_module">Selecionar status</label>
            <select id="course_module" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </SelectStyle>
          <ButtonS type="submit">Cadastrar Tecnologia</ButtonS>
        </form>
      </div>
    </AsideS>
  );
};
