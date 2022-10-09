import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/119324-404-error-lost-in-space-astronaut.json";
import { Main } from "./style";
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
    <Main>
      <h1>Página não encontrada</h1>
      <figure>
        <Lottie options={defaultOptions} height={300} width={300} />
      </figure>
      <Link reloadDocument to={"/"}>
        Voltar para o Login
      </Link>
    </Main>
  );
};
