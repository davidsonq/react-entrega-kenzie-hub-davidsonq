import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CardTechnology } from "../CardTechnology";

export const ListTechnology = () => {
  const { user } = useContext(UserContext);
  const { techs } = user;

  return (
    <ul>
      {!techs.length ? (
        <li>
          <h2>Nenhuma Tecnologia criada!</h2>
        </li>
      ) : (
        techs.map((tech) => <CardTechnology key={tech.id} tech={tech} />)
      )}
    </ul>
  );
};
