import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationWrapperProps } from './navigation.types';

export const NavWrapper = styled.nav<NavigationWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 1/13;
  grid-row: 1/4;
  width: 100%;
  height: 100%;
  @media (max-width: 580px) {
    position: absolute;
    align-items: flex-start;
    display: flex;
    top: 0;
    left: 0;
    z-index: 999;
    width: auto;
    height: auto;
  }
`;

export const StyledIcon = styled(NavLink)`
  position: absolute;
  top: 20px;
`;
