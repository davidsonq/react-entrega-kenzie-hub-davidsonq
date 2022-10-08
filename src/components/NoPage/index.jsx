import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/119324-404-error-lost-in-space-astronaut.json";
export const NoPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <main>
      <h1>Página não encontrada</h1>
      <figure>
        <Lottie options={defaultOptions} height={400} width={400} />
      </figure>
      <Link to={"/"}>Voltar para o Login</Link>
    </main>
  );
};
