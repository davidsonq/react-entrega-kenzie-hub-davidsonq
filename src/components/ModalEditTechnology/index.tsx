import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigateFunction, useProvider } from "../../contexts/UserContext";
import { formSchema } from "../../validation/editTechs";
import { HandleOption } from "../HandleOption";
import { api } from "../../servers/Api";
import { UseOutCLick } from "../../hooks/UseOutClick";
import { AsideS } from "../../styles/ModalStyle";
import { InputStyle } from "../../styles/InputStyle";
import { SelectStyle } from "../../styles/SelectStyle";
import { EditButton, ExitButton } from "./style";
import { iTech } from "../ListTechnology";

export const ModalEditTechnology = () => {
  const {
    rendModal,
    user,
    isToken,
    ToastSuccess,
    ToastError,
    navigate,
    setRendModal,
  } = useProvider();
  const modalRef = UseOutCLick(() => navigate("/dashbord", { replace: true }));
  const { techs } = user;

  const { name } = useParams<string>();
  const title = name?.replaceAll("+", "/");

  const filterTech: iTech[] = techs.filter(
    (tech: iTech): boolean => tech.title === title
  );

  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(formSchema),
  });

  const status = watch("status");

  const onSubmitFunctionEditTech = handleSubmit(async (data) => {
    setRendModal(false);
    try {
      await api.put(`/users/techs/${filterTech[0].id}`, data, {
        headers: {
          "Context-Type": "Application/json",
          Authorization: `Bearer ${JSON.parse(isToken)}`,
        },
      });
      navigate("/dashbord", { replace: true });

      ToastSuccess.fire({
        icon: "success",
        title: `Alteração feita com sucesso!`,
      });
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
  });

  const onSubmitFunctionDeleteTech = async (
    e: React.SyntheticEvent<EventListener>
  ) => {
    setRendModal(false);
    e.preventDefault();
    try {
      await api.delete(`/users/techs/${filterTech[0].id}`, {
        headers: {
          "Context-Type": "Application/json",
          Authorization: `Bearer ${JSON.parse(isToken)}`,
        },
      });

      navigate("/dashbord", { replace: true });

      ToastSuccess.fire({
        icon: "success",
        title: `Deletado com sucesso!`,
      });
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
      <div ref={modalRef} className="animate__animated animate__jackInTheBox">
        <div>
          <h3>Tecnologia Detalhes</h3>
          <button
            className="exit__button"
            onClick={() => navigate("/dashbord", { replace: true })}
            type="button"
          >
            X
          </button>
        </div>
        <form onSubmit={onSubmitFunctionEditTech}>
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
              disabled={!status || !rendModal}
              type="submit"
            >
              Salvar alterações
            </EditButton>
            <ExitButton
              disabled={!rendModal}
              onClick={onSubmitFunctionDeleteTech}
              type="button"
            >
              Excluir
            </ExitButton>
          </div>
        </form>
      </div>
    </AsideS>
  );
};
