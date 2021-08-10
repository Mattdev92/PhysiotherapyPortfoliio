import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 100px 15px 20px;
  grid-row: 1 / 4;
  grid-column: 1 / 11;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: auto;
  gap: 10px;
  justify-content: center;
  @media (max-width: 580px) {
    grid-column: 1 / 11;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
