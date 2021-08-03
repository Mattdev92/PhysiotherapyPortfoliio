import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-column: 5/10;
  grid-row: 3/4;
  color: ${({ theme }) => theme.colors.main};
  align-self: center;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledImage = styled.img`
  margin-bottom: 20px;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  @media (max-width: 1450px) {
    margin-bottom: 0;
    height: 200px;
    width: 200px;
  } ;
`;
