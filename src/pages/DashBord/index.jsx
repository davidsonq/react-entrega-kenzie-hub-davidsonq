import { useContext } from "react";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { Section, SectionConstructor } from "./style";
export const DashBord = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="animate__animated animate__zoomIn">
      <Header />
      <main>
        <Section>
          <div>
            <h2>{`Olá,${user.name}`}</h2>
            <p>{user.course_module}</p>
          </div>
        </Section>
        <SectionConstructor>
          <h3>Que pena!Estamos em desenvolvimento :(</h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </SectionConstructor>
      </main>
    </div>
  );
};
