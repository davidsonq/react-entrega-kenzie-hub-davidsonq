import { Link } from "react-router-dom";

export const CardTechnology = ({ tech }) => {
  const { title, status } = tech;
  return (
    <li>
      <Link to={`edit/${tech.id}`}>
        <h3>{title}</h3>
        <p>{status}</p>
      </Link>
    </li>
  );
};
