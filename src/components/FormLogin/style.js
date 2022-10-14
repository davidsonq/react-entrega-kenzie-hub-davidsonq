import styled from "styled-components";

export const ButtonS = styled.button`
  cursor: pointer;
  width: 100%;
  height: 38.5px;
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  color: #ffffff;
  font-size: 0.813rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 13px;
  @media (min-width: 435px) {
    & {
      height: 48px;
      font-size: 1rem;
      transition: 0.5s;
    }
    &:hover {
      transition: 0.5s;
      background-color: var(--color-primary-focus);
    }
  }
`;
