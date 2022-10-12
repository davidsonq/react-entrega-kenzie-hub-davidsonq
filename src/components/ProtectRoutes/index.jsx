import * as animationData from "../../lotties/loading.json";
import Lottie from "react-lottie";
import { api } from "../../servers/Api";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ContainerLoading } from "./style";
import { UserContext } from "../../contexts/UserContext";

export const ProtectRoutes = () => {
  const { user, setUser, isToken } = useContext(UserContext);

  const navigate = useNavigate();

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
        const response = await api.get("/profile", {
          headers: {
            "Context-Type": "Application/json",
            Authorization: `Bearer ${JSON.parse(isToken)}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        navigate("/");
      }
    };
    requestProfile();
  }, []);
  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <ContainerLoading>
          <h1>Aguarde...</h1>
          <Lottie options={defaultOptions} height={300} width={300} />
        </ContainerLoading>
      )}
    </>
  );
};
