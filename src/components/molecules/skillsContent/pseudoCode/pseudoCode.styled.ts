import styled from 'styled-components';

export const PseudoCodeWrapper = styled.section`
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  grid-column: 1/2;
  grid-row: 1/5;
  height: 100%;
  justify-content: space-between;
  font-size: 13px;
  @media (max-width: 580px) {
    display: none;
  }
`;
