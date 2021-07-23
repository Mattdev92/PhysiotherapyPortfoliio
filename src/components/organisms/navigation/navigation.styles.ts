import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
  width: 100%;
  height: 100%;
`;

export const StyledIcon = styled(NavLink)`
  position: absolute;
  top: 35px;
`;
