import styled from "styled-components";
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 40px;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
  a {
    width: 80%;
    max-width: 283px;
    height: 38.5px;
    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
    font-weight: 500;
    font-size: 0.802rem;
    border-radius: 4px;
    border: 1px solid var(--color-grey-2);
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 435px) {
    a {
      transition: 0.5s;
      height: 48px;
      font-size: 1rem;
      &:hover {
        transition: 0.5s;
        background-color: var(--color-grey-3);
        border: 1px solid var(--color-grey-3);
      }
    }
  }
`;
