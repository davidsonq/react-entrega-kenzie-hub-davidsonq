import { Link } from "react-router-dom";
import { LiStyle } from "./style";
interface iCardTechnology {
  tech: {
    title: string;
    status: string;
  };
}
export const CardTechnology = ({ tech }: iCardTechnology) => {
  const { title, status } = tech;
  const name = tech.title;
  const NewName = name.replaceAll("/", "+");

  return (
    <LiStyle className="animate__animated animate__zoomIn" isAdvanced={status}>
      <Link to={`edit/${NewName}`}>
        <h3>{title}</h3>
        <p>{status}</p>
      </Link>
    </LiStyle>
  );
};
