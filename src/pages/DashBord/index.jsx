import { useContext } from "react";
import { Header } from "../../components/Header";
import { AddTechnology, ListTechnology } from "../../components/AddTechnology";
import { UserContext } from "../../contexts/UserContext";
import { Section, SectionConstructor } from "./style";
import { Outlet } from "react-router-dom";
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
          <AddTechnology />
        </SectionConstructor>
        <Outlet />
      </main>
    </div>
  );
};
