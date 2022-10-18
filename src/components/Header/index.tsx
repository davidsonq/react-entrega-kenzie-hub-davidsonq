import { Link } from "react-router-dom";
import { HeaderS } from "./style";
export const Header = () => {
  return (
    <HeaderS>
      <div>
        <figure>
          <img src={require("../../assets/Logo.svg").default} alt="Logo" />
        </figure>
        <Link
          onClick={() => {
            localStorage.removeItem("@KenzieHub:token");
            localStorage.removeItem("@KenzieHub:uuid");
          }}
          to={"/"}
        >
          Sair
        </Link>
      </div>
    </HeaderS>
  );
};
