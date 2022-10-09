import { useEffect, useState } from "react";
import { Header } from "../Header";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../servers/Api";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/loading.json";
import { ContainerLoading, Section, SectionConstructor } from "./style";
export const DashBord = () => {
  const [useAnimationDashbord, setUseAnimationDashbord] = useState(
    "animate__animated animate__backInDown"
  );
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [useProfile, setUseProfile] = useState({});
  const handleAnimation = () => {
    setUseAnimationDashbord("animate__animated  animate__backOutUp");
    setTimeout(() => {
      navigate("/");
      setUseAnimationDashbord("animate__animated animate__backInDown");
    }, 900);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (id !== res.data.id) {
          navigate("/no-page");
        }
        setUseProfile(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        navigate("/no-page");
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <ContainerLoading>
          <h1>Aguarde...</h1>
          <Lottie options={defaultOptions} height={300} width={300} />
        </ContainerLoading>
      ) : (
        <div className={useAnimationDashbord}>
          <Header handleAnimation={handleAnimation} />
          <main>
            <Section>
              <div>
                <h2>{`Olá,${useProfile.name}`}</h2>
                <p>{useProfile.course_module}</p>
              </div>
            </Section>
            <SectionConstructor>
              <h3>Que pena!Estamos em desenvolvimento :(</h3>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </SectionConstructor>
          </main>
        </div>
      )}
    </>
  );
};
