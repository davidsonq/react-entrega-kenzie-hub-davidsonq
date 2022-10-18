import * as animationData from "../../lotties/loading.json";
import Lottie from "react-lottie";
import { useProvider } from "../../contexts/UserContext";
import { ContainerLoading } from "../ProtectRoutes/style";
export const LoadingBig = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { rendModal } = useProvider();
  return (
    <>
      {!rendModal && (
        <ContainerLoading>
          <Lottie options={defaultOptions} height={250} width={250} />
        </ContainerLoading>
      )}
    </>
  );
};
