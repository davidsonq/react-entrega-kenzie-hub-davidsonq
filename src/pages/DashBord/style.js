import styled from "styled-components";
export const ContainerLoading = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 700;
    font-size: 2rem;
  }
`;
export const Section = styled.section`
  height: 130px;
  width: 100%;
  border-bottom: 1px solid var(--color-grey-3);
  div {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    width: 70%;
    height: 100%;
    margin: 0 auto;
    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h2 {
      font-weight: 700;
      font-size: 1.125rem;
    }
    p {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-grey-1);
    }
  }
`;
export const SectionConstructor = styled.section`
  width: 70%;
  margin: 37px auto;
  display: flex;
  flex-direction: column;
  gap: 23px;
  h3 {
    font-weight: 700;
    font-size: 1.125rem;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: #ffffff;
  }
`;
