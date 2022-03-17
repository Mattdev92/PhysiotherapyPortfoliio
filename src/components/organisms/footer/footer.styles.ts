import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 1/13;
  grid-row: 12/13;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background: black;
  opacity: 90%;
  max-height: 30px;
  align-self: end;
  opacity: 70%;
  @media (max-width: 1150px) {
    grid-column: 1/11;
  }
  @media (max-width: 950px) {
    grid-column: 1/9;
  }
  @media (max-width: 760px) {
    grid-column: 1/7;
  }
`;
