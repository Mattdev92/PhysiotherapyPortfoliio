import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 0 10px;
  display: inline-block;
  grid-row: 2 / 3;
  grid-column: 3 / 8;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  @media (max-width: 1000px) {
    margin: 0px;
  }
`;
