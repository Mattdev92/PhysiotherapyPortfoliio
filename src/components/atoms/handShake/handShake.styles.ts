import styled from 'styled-components';

export const StyledCircle = styled.div`
  grid-row: 3 / 4;
  grid-column: 5 / 7;
  width: 130px;
  height: 130px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.helper};
  cursor: pointer;
  &:hover {
    transform: scale(1.4);
    background: rgb(89, 210, 101);
    transition: all 0.5s ease;
  }
  @media (max-width: 580px) {
    margin: 15px;
    width: 100px;
    height: 100px;
  }
`;
