import styled from "styled-components";
export const ExitButton = styled.button`
  width: 78.35px;
  height: 38.37px;
  cursor: pointer;
  border-radius: 4px;
  background-color: var(--color-grey-1);
  border: 1px solid var(--color-grey-1);
  color: #ffffff;
  font-weight: 500;
  font-size: 0.781rem;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
  }
  @media (min-width: 435px) {
    & {
      width: 98px;
      height: 48px;
      font-size: 1rem;
    }
  }
`;
export const EditButton = styled.button`
  width: 163.09px;
  height: 38.37px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.status ? "#59323F" : "#FF577F")};
  background-color: ${(props) => (props.status ? "#59323F" : "#FF577F")};

  cursor: ${(props) => (props.status ? "no-drop" : "pointer")};
  color: #ffffff;
  font-weight: 500;
  font-size: 0.799rem;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    border: 1px solid ${(props) => (props.status ? "#59323F" : "#FF427F")};
    background-color: ${(props) => (props.status ? "#59323F" : "#FF427F")};
  }
  @media (min-width: 435px) {
    & {
      width: 204px;
      height: 48px;
      font-size: 1rem;
    }
  }
`;
