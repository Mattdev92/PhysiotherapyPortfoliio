import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 10px;
  grid-column: 1/11;
  grid-row: 1/4;
  max-width: 100%;
  max-height: 100%;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  align-items: center;
  justify-content: center;
  gap: 10px 0;
  align-self: center;
  /* @media (max-width: 580px) {
    align-items: start;
    justify-content: start;
    align-self: start;
    justify-self: start;
  }
  @media (max-width: 800px) {
    align-items: start;
    justify-content: start;
  } */
`;
