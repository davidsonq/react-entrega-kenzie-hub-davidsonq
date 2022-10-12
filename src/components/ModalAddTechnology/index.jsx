import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { formSchema } from "../../validation/registerTehnology";

export const ModalAddTehnology = () => {
  const { onSubmitFunctionAddTech } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <aside>
      <div>
        <div>
          <h3>Cadastrar Tecnologia</h3>
          <Link to={"/dashbord"}>X</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunctionAddTech)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              className={errors.title?.message ? "red__input" : ""}
              type="text"
              id="name"
              {...register("title")}
              placeholder="Digite nome da tecnologia"
            />
          </div>
          <span>
            {errors.title?.message && <FiAlertCircle />}
            <strong>{errors.title?.message}</strong>
          </span>
          <div>
            <label htmlFor="course_module">Selecionar status</label>
            <select id="course_module" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </aside>
  );
};
