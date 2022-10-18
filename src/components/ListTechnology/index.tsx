import { useProvider } from "../../contexts/UserContext";
import { CardTechnology } from "../CardTechnology";
import { ContainerStyle, ContainerStyleUl, UlStyle } from "./style";
export interface iTech {
  id: string;
  title: string;
  status: string;
}
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
        <ContainerStyleUl>
          <UlStyle>
            {techs.map((tech: iTech) => (
              <CardTechnology key={tech.id} tech={tech} />
            ))}
          </UlStyle>
        </ContainerStyleUl>
      )}
    </>
  );
};
