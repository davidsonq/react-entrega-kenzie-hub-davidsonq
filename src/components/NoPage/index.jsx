import { Link } from "react-router-dom";
export const NoPage = () => {
  return (
    <main>
      <h1>Página não encontrada</h1>
      <figure></figure>
      <Link to={"/"}>Voltar para o Login</Link>
    </main>
  );
};
