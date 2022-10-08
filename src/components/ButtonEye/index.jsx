import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
export const ButtonEye = ({ useEye, setUseEye }) => {
  return (
    <>
      <button
        onClick={() => {
          if (useEye === "password") {
            return setUseEye("text");
          }
          return setUseEye("password");
        }}
        type="button"
      >
        {useEye === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
      </button>
    </>
  );
};
