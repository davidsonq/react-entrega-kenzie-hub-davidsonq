import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext";
import { formSchema } from "../../validation/editTechs";
import { HandleOption } from "../HandleOption";
import { api } from "../../servers/Api";

export const ModalEditTechnology = () => {
  const { user, isToken, ToastSuccess, ToastError, navigate, setRend, rend } =
    useContext(UserContext);

  const { techs } = user;

  const { id } = useParams();

  const filterTech = techs.filter((tech) => tech.id === id);

  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(formSchema),
  });

  const status = watch("status");

  const onSubmitFunctionEditTech = async (data) => {
    try {
      const response = await api.put(`/users/techs/${filterTech[0].id}`, data, {
        headers: {
          "Context-Type": "Application/json",
          Authorization: `Bearer ${JSON.parse(isToken)}`,
        },
      });
      setRend(false);
      navigate("/dashbord");
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
      navigate("/");
    }
  };

  const onSubmitFunctionDeleteTech = async (e) => {
    e.preventDefault();
    try {
      const response = await api.delete(`/users/techs/${filterTech[0].id}`, {
        headers: {
          "Context-Type": "Application/json",
          Authorization: `Bearer ${JSON.parse(isToken)}`,
        },
      });
      setRend(false);
      navigate("/dashbord");
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
      navigate("/");
    }
  };

  return (
    <aside>
      <div>
        <div>
          <h3>Tecnologia Detalhes</h3>
          <Link to={"/dashbord"}>X</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunctionEditTech)}>
          <div>
            <label htmlFor="name">Nome do projeto</label>
            <input
              type="text"
              id="name"
              disabled
              placeholder={filterTech[0].title}
            />
          </div>
          <div>
            <label htmlFor="course_module">Selecionar status</label>
            <select id="course_module" {...register("status")}>
              <HandleOption status={filterTech[0].status} />
            </select>
          </div>
          <div>
            <button disabled={!status} type="submit">
              Salvar alterações
            </button>
            <button onClick={onSubmitFunctionDeleteTech} type="button">
              Excluir
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
};
