import * as animationData from "../../lotties/loading.json";
import Lottie from "react-lottie";
import { useProvider } from "../../contexts/UserContext";
export const LoadingDashbord = () => {
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
      {!rendModal && <Lottie options={defaultOptions} height={60} width={60} />}
    </>
  );
};
