import styled from "styled-components";
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 38px;

  header {
    margin-top: 57px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    max-width: 370px;
    align-items: center;
    img {
      width: 97.59px;
    }
    a {
      text-decoration: none;
      font-size: 0.599rem;
      font-weight: 600;
      color: var(--color-grey-0);
      background-color: var(--color-grey-3);
      height: 31.95px;
      width: 79px;
      padding: 0 16px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  form {
    width: 90%;
    max-width: 370px;
    margin-bottom: 50px;
    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3.2px;
    padding: 34px 18px 19px;

    h2 {
      font-size: 0.899rem;
      font-weight: 700;
    }
    h3 {
      margin: 17px 0;
      font-size: 0.599rem;
      font-weight: 400;
      color: var(--color-grey-1);
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
    }
  }
  span {
    height: 30px;
    width: 100%;

    display: flex;
    align-items: center;
    color: var(--color-primary);
    font-size: 0.75rem;
    font-weight: 500;
  }
  @media (min-width: 435px) {
    header {
      figure {
        img {
          width: 122px;
        }
      }
      a {
        height: 40.11px;
        width: 67.49px;
        font-size: 0.75rem;
        transition: 0.5s;
        &:hover {
          transition: 0.5s;
          background-color: var(--color-grey-2);
        }
      }
    }

    form {
      padding: 34px 22.5px 19px;
      h2 {
        font-size: 1.125rem;
      }
      h3 {
        font-size: 0.75rem;
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
        select {
          height: 48px;
          font-size: 1rem;
        }
        button {
          margin-top: -44px;
          margin-left: 300px;
        }
        span {
          font-size: 1rem;
        }
      }
    }
  }
`;
export const ButtonRegister = styled.button`
  cursor: pointer;
  width: 100%;
  height: 38.5px;
  margin-top: 17px;
  border-radius: 4px;
  color: #ffffff;
  font-size: 0.799rem;
  font-weight: 500;
  background-color: ${(props) => (props.isValid ? "#59323F" : "#FF577F")};
  border: 1px solid ${(props) => (props.isValid ? "#59323F" : "#FF577F")};
  @media (min-width: 435px) {
    & {
      height: 48px;
      font-size: 1rem;
      transition: 0.5s;
      &:hover {
        background-color: ${(props) => (props.isValid ? "#59323F" : "#FF427F")};
        border: 1px solid ${(props) => (props.isValid ? "#59323F" : "#FF577F")};
        transition: 0.5s;
      }
    }
  }
`;
