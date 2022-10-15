import styled from "styled-components";
export const HeaderS = styled.header`
  height: 73px;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--color-grey-4);
  border-bottom: 1px solid var(--color-grey-3);
  div {
    width: 90%;
    max-width: 780px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    a {
      text-decoration: none;
      color: var(--color-grey-0);
      height: 32px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.75rem;
      background-color: var(--color-grey-3);
      padding: 0px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        background-color: var(--color-grey-2);
      }
    }
    img {
      width: 105px;
    }
  }
`;
