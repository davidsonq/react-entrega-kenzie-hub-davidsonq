import { Header } from "../../components/Header";
import { AddTechnology } from "../../components/AddTechnology";
import { useProvider } from "../../contexts/UserContext";
import { Section, SectionConstructor } from "./style";
import { Navigate, Outlet } from "react-router-dom";
import { ListTechnology } from "../../components/ListTechnology";
import { LoadingBig } from "../../components/LoadingBig";
export const DashBord = () => {
  const { user } = useProvider();
  const { id, name, course_module } = user;

  return (
    <>
      {!id ? (
        <Navigate to={"/"} replace />
      ) : (
        <>
          <div className="animate__animated animate__zoomIn">
            <Header />
            <main>
              <Section>
                <div>
                  <h2>{`Olá,${name}`}</h2>
                  <p>{course_module}</p>
                </div>
              </Section>
              <SectionConstructor>
                <AddTechnology />
                <ListTechnology />
              </SectionConstructor>
            </main>
          </div>
          <LoadingBig />
          <Outlet />
        </>
      )}
    </>
  );
};
