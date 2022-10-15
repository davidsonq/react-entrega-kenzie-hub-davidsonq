import { useState } from "react";
import { Link } from "react-router-dom";
import { LiStyle } from "./style";

export const CardTechnology = ({ tech }) => {
  const { title, status } = tech;

  return (
    <LiStyle isAdvanced={status}>
      <Link to={`edit/${tech.id}`}>
        <h3>{title}</h3>
        <p>{status}</p>
      </Link>
    </LiStyle>
  );
};
