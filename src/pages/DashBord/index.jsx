import { Header } from "../../components/Header";
import { AddTechnology } from "../../components/AddTechnology";
import { useProvider } from "../../contexts/UserContext";
import { Section, SectionConstructor } from "./style";
import { Outlet } from "react-router-dom";
import { ListTechnology } from "../../components/ListTechnology";
export const DashBord = () => {
  const { user } = useProvider();

  return (
    <>
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
            <ListTechnology />
          </SectionConstructor>
        </main>
      </div>
      <Outlet />
    </>
  );
};
