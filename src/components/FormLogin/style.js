import styled from "styled-components";

export const ButtonS = styled.button`
  cursor: ${(props) => (props.rendModal ? "no-drop" : "pointer")};
  width: 100%;
  height: 38.5px;
  background-color: ${(props) => (props.rendModal ? "#59323F" : "#FF577F")};
  border: 1px solid ${(props) => (props.rendModal ? "#59323F" : "#FF577F")};
  color: #ffffff;
  font-size: 0.813rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 13px;
  @media (min-width: 435px) {
    & {
      height: 48px;
      font-size: 1rem;
      transition: 0.5s;
    }
    &:hover {
      transition: 0.5s;
      background-color: ${(props) => (props.rendModal ? "#59323F" : "#FF427F")};
      border: 1px solid ${(props) => (props.rendModal ? "#59323F" : "#FF427F")};
    }
  }
`;
