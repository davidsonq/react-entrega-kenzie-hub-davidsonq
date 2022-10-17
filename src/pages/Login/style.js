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
    padding: 20px 16px;
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

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 20px;
      width: 100%;
      gap: 10px;
      color: var(--color-primary);
      font-size: 0.75rem;
      font-weight: 500;
      strong {
        display: flex;
        font-size: 1.25rem;
      }
    }
  }
  @media (min-width: 435px) {
    figure {
      img {
        width: 144px;
      }
    }
    form {
      padding: 30px 22.5px 19px;
      height: 502px;
      h2 {
        font-size: 1.125rem;
        margin-top: 20px;
      }
      span {
        font-size: 0.8rem;
        strong {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
