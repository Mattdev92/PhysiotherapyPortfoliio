import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavWrapperProps } from './navList.types';

export const ListWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 580px) {
    flex-direction: column;
    justify-content: space-between;
  } ;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: black;
  &.active {
    &:before {
      content: '';
      position: absolute;
      display: flex;
      justify-content: center;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      height: 30px;
      width: 80%;
      border-bottom: 2px solid ${({ theme }) => theme.colors.helper};
    }
  }
  @media (max-width: 580px) {
    &.active {
      &:before {
        content: '';
        border: none;
      }
    }
  }
`;
export const NavWrapper = styled.div<NavWrapperProps>`
  padding: 0 140px;
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 660px;
  @media (max-width: 580px) {
    position: absolute;
    top: 0;
    padding: 0;
    width: 200px;
    min-width: 200px;
    height: 100vh;
    left: 0;
    flex-direction: column;
    justify-content: space-evenly;
    transform: ${({ mobile }) =>
      mobile ? 'translateX(0px)' : 'translateX(-200px)'};
    transition: transform 0.5s ease-in;
    background: rgb(50, 50, 50);
    color: white;
  }
  @media (max-width: 1000px) {
    padding: 0 10px;
  } ;
`;

export const StyledLogo = styled(NavLink)`
  margin: 0;
  text-decoration: none;
`;
