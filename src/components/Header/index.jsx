import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { HeaderS } from "./style";
export const Header = () => {
  return (
    <HeaderS>
      <div>
        <figure>
          <img src={Logo} alt="Logo" />
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
