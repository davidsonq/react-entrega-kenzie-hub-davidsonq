import { useProvider } from "../../contexts/UserContext";
import { CardTechnology } from "../CardTechnology";
import { ContainerStyle, UlStyle } from "./style";

export const ListTechnology = () => {
  const { user } = useProvider();
  const { techs } = user;

  return (
    <>
      {!techs.length ? (
        <ContainerStyle>
          <h2>Nenhuma Tecnologia criada!</h2>
        </ContainerStyle>
      ) : (
        <UlStyle>
          {techs.map((tech) => (
            <CardTechnology key={tech.id} tech={tech} />
          ))}
        </UlStyle>
      )}
    </>
  );
};
