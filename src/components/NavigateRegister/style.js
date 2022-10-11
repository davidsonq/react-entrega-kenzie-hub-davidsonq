import styled from "styled-components";
export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
  p {
    font-size: 0.602rem;
    font-weight: 600;
    color: var(--color-grey-1);
  }
  a {
    width: 100%;
    height: 38.5px;
    background-color: var(--color-grey-1);
    color: var(--color-grey-0);
    font-weight: 500;
    font-size: 0.802rem;
    border-radius: 4px;
    border: 1px solid var(--color-grey-1);
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 435px) {
    & {
      margin-top: 20px;
    }
    p {
      font-size: 0.75rem;
    }
    a {
      height: 48px;
      font-size: 1rem;
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
      }
    }
  }
`;
