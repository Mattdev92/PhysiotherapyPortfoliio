import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: black;
  margin: 16px 0;
  &.active {
    &:before {
      content: '';
      position: absolute;
      top: 10px;
      height: 30px;
      width: 100%;
      border-bottom: 2px solid black;
    }
  }
  @media (max-width: 580px) {
    &.active {
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        height: 30px;
        width: 100%;
        border-bottom: 2px solid black;
      }
    }
  }
`;
