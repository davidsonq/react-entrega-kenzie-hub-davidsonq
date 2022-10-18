import styled from "styled-components";
export const SelectStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  label {
    font-size: 0.611rem;
    font-weight: 400;
  }

  select {
    cursor: pointer;
    margin-top: 17px;
    outline: none;
    width: 100%;
    height: 38.5px;
    border-radius: 3px;
    padding: 0 13px;
    border: 1px solid var(--color-grey-2);
    color: var(--color-grey-1);
    background-color: var(--color-grey-2);
    font-size: 0.813rem;
    font-weight: 400;
    &:focus {
      border: 1px solid var(--color-grey-0);
      & {
        color: var(--color-grey-0);
      }
    }
  }
  @media (min-width: 435px) {
    & {
      label {
        font-size: 0.75rem;
      }

      button {
        margin-top: -44px;
        margin-left: 300px;
      }
      select {
        height: 48px;
        font-size: 1rem;
      }
    }
  }
`;
