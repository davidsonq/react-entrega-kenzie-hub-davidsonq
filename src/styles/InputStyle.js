import styled from "styled-components";
export const InputStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  label {
    font-size: 0.611rem;
    font-weight: 400;
  }
  .red__input {
    &:focus {
      border: 1.22px solid var(--color-primary-focus);
      &::placeholder {
        color: var(--color-primary);
      }
    }
  }
  input {
    margin-top: 17px;
    outline: none;
    width: 100%;
    height: 38.5px;
    border-radius: 3px;
    padding: 0 13px;
    border: 1px solid var(--color-grey-2);
    color: var(--color-grey-0);
    background-color: var(--color-grey-2);
    font-size: 0.813rem;
    font-weight: 400;
    &::placeholder {
      color: var(--color-grey-1);
      font-size: 0.813rem;
      font-weight: 400;
    }

    &:focus {
      border: 1.22px solid var(--color-grey-0);
      &::placeholder {
        color: var(--color-grey-0);
      }
    }
  }
  button {
    margin-top: -34px;
    margin-left: 68vw;
  }
  @media (min-width: 435px) {
    & {
      label {
        font-size: 0.75rem;
      }
      input {
        height: 48px;
        &::placeholder {
          font-size: 1rem;
        }
      }
      button {
        margin-top: -44px;
        margin-left: 310px;
      }
    }
  }
`;
