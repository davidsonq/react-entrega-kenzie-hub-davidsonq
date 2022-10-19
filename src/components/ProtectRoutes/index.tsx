import { api } from "../../servers/Api";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { iTechs, useProvider } from "../../contexts/UserContext";

export const ProtectRoutes = () => {
  const { navigate, setUser, isToken, rend, setRend, setRendModal, rendModal } =
    useProvider();

  useEffect(() => {
    const requestProfile = async () => {
      try {
        const { data } = await api.get<iTechs>("/profile", {
          headers: {
            "Context-Type": "Application/json",
            Authorization: `Bearer ${JSON.parse(isToken)}`,
          },
        });
        console.log(data);

        setRend(true);
        setRendModal(true);
        setUser({ ...data });
      } catch (error) {
        navigate("/");
      }
    };
    requestProfile();
  }, [rendModal]);
  return <>{rend && <Outlet />}</>;
};
