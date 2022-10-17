import styled from "styled-components";
export const UlStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  max-height: 420px;
  overflow-y: scroll;
  padding: 22px 8.5px;
  background-color: var(--color-grey-3);
  border-radius: 4px;
  @media (min-width: 435px) {
    & {
      padding: 23px 22px;
    }
  }
`;
export const ContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  background-color: var(--color-grey-4);
  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
`;
