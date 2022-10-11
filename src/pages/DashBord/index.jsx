import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
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

  useEffect(() => {
    const requestProfile = async () => {
      try {
        const response = await api.get("/profile");

        setUseProfile(response.data);
        setIsLoading(false);
      } catch (error) {
        navigate("no-page");
      }
    };
    requestProfile();
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
