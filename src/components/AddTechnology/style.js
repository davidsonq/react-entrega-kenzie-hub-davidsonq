import { GrFormAdd } from "react-icons/gr";
import styled from "styled-components";
export const ContainerAdd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  h3 {
    font-size: 1rem;
    font-weight: 600;
  }
  a {
    width: 32.49px;
    height: 32px;
    border-radius: 4px;
    background-color: var(--color-grey-3);
    text-decoration: none;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      background-color: var(--color-grey-2);
    }
  }
`;
