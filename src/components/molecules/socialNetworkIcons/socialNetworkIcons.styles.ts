import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 20px;
  position: sticky;
  margin: 20px;
  grid-column: 9 / 11;
  grid-row: 1 / 2;
  align-self: start;
  height: 80px;
  @media (max-width: 1400px) {
    grid-column: 8 / 10;
  }
  @media (max-width: 1150px) {
    grid-column: 6 / 8;
  }
  @media (max-width: 780px) {
    grid-column: 4 / 6;
  }
  @media (max-width: 580px) {
    margin: 20px 0;
    width: 100%;
    height: 80px;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-width: 250px;
  height: 100%;
`;
export const StyledIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  @media (max-width: 580px) {
    justify-content: space-between;
    height: 30px;
    width: 30px;
  }
`;
