import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  @media (max-width: 1150px) {
    grid-template-columns: repeat(10, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 580px) {
    padding-top: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;
