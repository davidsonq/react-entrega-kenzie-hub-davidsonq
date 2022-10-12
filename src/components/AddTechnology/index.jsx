import { GrFormAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

export const AddTechnology = () => {
  return (
    <>
      <div>
        <h3>Tecnologias</h3>
        <Link to={"register"}>
          <GrFormAdd />
        </Link>
      </div>
    </>
  );
};
