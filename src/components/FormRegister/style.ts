import styled from "styled-components";
interface iButtonRegister {
  cursoPoint: boolean;
  isValid: boolean;
}
export const ButtonRegister = styled.button<iButtonRegister>`
  cursor: ${(props) => (props.cursoPoint ? "no-drop" : "pointer")};
  width: 100%;
  height: 38.5px;
  margin-top: 17px;
  border-radius: 4px;
  color: #ffffff;
  font-size: 0.799rem;
  font-weight: 500;
  background-color: ${(props) => (props.isValid ? "#59323F" : "#FF577F")};
  border: 1px solid ${(props) => (props.isValid ? "#59323F" : "#FF577F")};
  @media (min-width: 435px) {
    & {
      height: 48px;
      font-size: 1rem;
      transition: 0.5s;
      &:hover {
        background-color: ${(props) => (props.isValid ? "#59323F" : "#FF427F")};
        border: 1px solid ${(props) => (props.isValid ? "#59323F" : "#FF577F")};
        transition: 0.5s;
      }
    }
  }
`;
