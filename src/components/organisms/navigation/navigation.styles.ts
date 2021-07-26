import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
  grid-column: 1/3;
  grid-row: 1/4;
  @media (max-width: 580px) {
    display: none;
  }
`;

export const StyledIcon = styled(NavLink)`
  position: absolute;
  top: 20px;
`;
