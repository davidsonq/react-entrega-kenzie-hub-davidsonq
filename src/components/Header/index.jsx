import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
export const Header = () => {
  return (
    <header>
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
    </header>
  );
};
