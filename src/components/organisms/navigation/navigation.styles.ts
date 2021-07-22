import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
  width: 260px;
  height: 100vh;
`;
