import styled from 'styled-components';

export const StyledCircle = styled.div`
  grid-row: 3 / 4;
  grid-column: 5 / 7;
  width: 160px;
  height: 160px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.helper};
  border: none;
  cursor: pointer;
`;