import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Button } from "./style";
export const ButtonEye = ({ useEye, setUseEye }) => {
  return (
    <>
      <Button
        onClick={() => {
          if (useEye === "password") {
            return setUseEye("text");
          }
          return setUseEye("password");
        }}
        type="button"
      >
        {useEye === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
      </Button>
    </>
  );
};
