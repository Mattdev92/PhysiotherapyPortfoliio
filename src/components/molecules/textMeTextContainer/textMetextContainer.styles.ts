import styled from 'styled-components';

export const TextWrapper = styled.span`
  grid-column: 2/5;
  grid-row: 3/4;
  color: ${({ theme }) => theme.colors.main};
  align-self: center;
`;
