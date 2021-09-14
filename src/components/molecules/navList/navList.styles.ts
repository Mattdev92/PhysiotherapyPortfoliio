import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
      top: 5px;
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
export const NavWrapper = styled.div`
  padding: 0 140px;
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled(NavLink)`
  margin: 0;
  text-decoration: none;
`;
