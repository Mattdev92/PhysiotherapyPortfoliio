import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
  width: 100%;
  height: 100%;
`;
