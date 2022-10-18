import styled from "styled-components";
interface iListyle {
  isAdvanced: string;
}
export const LiStyle = styled.li<iListyle>`
  width: 100%;

  a {
    padding: 12.8px;
    width: 100%;
    height: 48.73px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    border-radius: 4px;
    background-color: ${(props) =>
      props.isAdvanced === "Avançado" ? "#343B41" : "#121214"};
    transition: 0.5s;
    &:hover {
      background-color: ${(props) =>
        props.isAdvanced === "Avançado" ? "#868E9625" : "#343B41"};
      transition: 0.5s;
      p {
        color: var(--color-grey-0);
      }
    }
    h3 {
      color: var(--color-grey-0);
      font-size: 0.888rem;
      font-weight: 700;
    }
    p {
      color: ${(props) =>
        props.isAdvanced === "Avançado" ? "#F8F9FA" : "#868E96"};
      font-weight: 400;
      font-size: 0.761rem;
    }
  }
  @media (min-width: 435px) {
    & {
      a {
        padding: 22.8px;
        height: 49px;
      }
    }
  }
`;
