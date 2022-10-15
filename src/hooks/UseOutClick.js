import { useEffect, useRef } from "react";

export const UseOutCLick = (callback) => {
  const ref = useRef();
  useEffect(() => {
    const handleOutClick = (e) => {
      if (!ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);
  return ref;
};
