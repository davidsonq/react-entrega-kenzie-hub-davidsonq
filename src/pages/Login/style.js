import styled from "styled-components";
export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 19px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 23px 16px;
    background-color: var(--color-grey-3);
    border-radius: 3px;
    height: 402px;
    width: 85%;
    gap: 6px;
    max-width: 369px;

    h2 {
      font-size: 0.875rem;
      font-weight: 700;
      margin-bottom: 13px;
    }
    div {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      label {
        font-size: 0.611rem;
        font-weight: 400;
      }
      .red__input {
        &:focus {
          border: 1.22px solid var(--color-primary);
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
    }
    span {
      height: 20px;
      width: 100%;
      display: flex;
      align-items: center;
      color: var(--color-primary);
      font-size: 0.75rem;
      font-weight: 500;
    }
  }
  @media (min-width: 435px) {
    figure {
      img {
        width: 144px;
      }
    }
    form {
      height: 502px;
      h2 {
        font-size: 1.125rem;
        margin-top: 20px;
      }
      div {
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
        span {
          font-size: 1rem;
        }
      }
    }
  }
`;
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
