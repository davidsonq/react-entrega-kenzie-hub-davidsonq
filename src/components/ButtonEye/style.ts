import styled from "styled-components";
export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--color-grey-1);
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }
`;
