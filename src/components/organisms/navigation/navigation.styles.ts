import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationWrapperProps } from './navigation.types';

export const NavWrapper = styled.nav<NavigationWrapperProps>`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
  grid-column: 1/3;
  grid-row: 1/4;
  width: 100%;
  @media (max-width: 580px) {
    transform: ${({ mobile }) =>
      mobile ? 'translateX(0)' : 'translateX(-300px)'};
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 300px;
    height: 100vh;
    transition: transform 0.3s ease-in;
  }
`;

export const StyledIcon = styled(NavLink)`
  position: absolute;
  top: 20px;
`;
