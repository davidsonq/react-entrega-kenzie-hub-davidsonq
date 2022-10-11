import { useContext } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { UserContext } from "../../contexts/UserContext";
import { Button } from "./style";

export const ButtonEye = () => {
  const { useEye, setUseEye } = useContext(UserContext);

  const handleTypeEye = () =>
    useEye === "password" ? setUseEye("text") : setUseEye("password");

  return (
    <Button onClick={handleTypeEye} type="button">
      {useEye === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
    </Button>
  );
};
