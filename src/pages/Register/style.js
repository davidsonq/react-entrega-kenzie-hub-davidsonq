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
    gap: 6px;
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
  }
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 25px;
    width: 100%;
    gap: 10px;
    color: var(--color-primary);
    font-size: 1.25rem;
    font-weight: 500;

    strong {
      display: flex;
      font-size: 0.75rem;
    }
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

      span {
        font-size: 1.2rem;
        strong {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
