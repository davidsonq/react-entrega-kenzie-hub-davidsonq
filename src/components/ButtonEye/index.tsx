import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useProvider } from "../../contexts/UserContext";
import { Button } from "./style";

export const ButtonEye = () => {
  const { useEye, setUseEye } = useProvider();

  const handleTypeEye = () =>
    useEye === "password" ? setUseEye("text") : setUseEye("password");

  return (
    <Button onClick={handleTypeEye} type="button">
      {useEye === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
    </Button>
  );
};
