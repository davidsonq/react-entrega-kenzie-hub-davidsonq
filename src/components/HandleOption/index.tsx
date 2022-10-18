interface iHandleOption {
  status: string;
}
export const HandleOption = ({ status }: iHandleOption) => {
  if (status === "Iniciante") {
    return (
      <>
        <option value="">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </>
    );
  }
  return (
    <>
      {status === "Intermediário" ? (
        <>
          <option value="">Intermediário</option>
          <option value="Avançado">Avançado</option>
          <option value="Iniciante">Iniciante</option>
        </>
      ) : (
        <>
          <option value="">Avançado</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Iniciante">Iniciante</option>
        </>
      )}
    </>
  );
};
