import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProvider } from "../../contexts/UserContext";
import { formSchema } from "../../validation/editTechs";
import { HandleOption } from "../HandleOption";
import { api } from "../../servers/Api";
import { UseOutCLick } from "../../hooks/UseOutClick";
import { AsideS } from "../../styles/ModalStyle";
import { InputStyle } from "../../styles/InputStyle";
import { SelectStyle } from "../../styles/SelectStyle";
import { EditButton, ExitButton } from "./style";

export const ModalEditTechnology = () => {
  const {
    isInAnimation,
    handleAnimation,
    user,
    isToken,
    ToastSuccess,
    ToastError,
    navigate,
    setRend,
    rend,
  } = useProvider();
  const modalRef = UseOutCLick(() => handleAnimation());
  const { techs } = user;

  const { name } = useParams();
  const title = name.replaceAll("+", "/");

  const filterTech = techs.filter((tech) => tech.title === title);

  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(formSchema),
  });

  const status = watch("status");

  const onSubmitFunctionEditTech = async (data) => {
    try {
      await api.put(`/users/techs/${filterTech[0].id}`, data, {
        headers: {
          "Context-Type": "Application/json",
          Authorization: `Bearer ${JSON.parse(isToken)}`,
        },
      });
      setRend(false);
      navigate("/dashbord", { replace: true });
      if (rend) {
        ToastSuccess.fire({
          icon: "success",
          title: `Alteração feita com sucesso!`,
        });
      }
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Erro voltando para login!`,
      });
      localStorage.removeItem("@KenzieHub:token");
      localStorage.removeItem("@KenzieHub:uuid");
      navigate("/", { replace: true });
    }
  };

  const onSubmitFunctionDeleteTech = async (e) => {
    e.preventDefault();
    try {
      await api.delete(`/users/techs/${filterTech[0].id}`, {
        headers: {
          "Context-Type": "Application/json",
          Authorization: `Bearer ${JSON.parse(isToken)}`,
        },
      });
      setRend(false);
      navigate("/dashbord", { replace: true });
      if (rend) {
        ToastSuccess.fire({
          icon: "success",
          title: `Deletado com sucesso!`,
        });
      }
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Erro voltando para login!`,
      });
      localStorage.removeItem("@KenzieHub:token");
      localStorage.removeItem("@KenzieHub:uuid");
      navigate("/", { replace: true });
    }
  };

  return (
    <AsideS>
      <div ref={modalRef} className={isInAnimation}>
        <div>
          <h3>Tecnologia Detalhes</h3>
          <Link onClick={handleAnimation}>X</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunctionEditTech)}>
          <InputStyle>
            <label htmlFor="name">Nome do projeto</label>
            <input
              type="text"
              id="name"
              disabled
              placeholder={filterTech[0].title}
            />
          </InputStyle>
          <SelectStyle>
            <label htmlFor="course_module">Selecionar status</label>
            <select id="course_module" {...register("status")}>
              <HandleOption status={filterTech[0].status} />
            </select>
          </SelectStyle>
          <div>
            <EditButton
              className={!status ? "" : "animate__animated  animate__pulse"}
              status={!status}
              disabled={!status}
              type="submit"
            >
              Salvar alterações
            </EditButton>
            <ExitButton onClick={onSubmitFunctionDeleteTech} type="button">
              Excluir
            </ExitButton>
          </div>
        </form>
      </div>
    </AsideS>
  );
};
