import { Link } from "react-router-dom";
import { ContainerAdd } from "./style";
import { MdAdd } from "react-icons/md";
export const AddTechnology = () => {
  return (
    <>
      <ContainerAdd>
        <h3>Tecnologias</h3>
        <Link to={"register"}>
          <MdAdd />
        </Link>
      </ContainerAdd>
    </>
  );
};
