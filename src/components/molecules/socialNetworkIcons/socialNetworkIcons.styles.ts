import styled from 'styled-components';
import { WrapperProps } from './socialNetworkIcons.types';

export const Wrapper = styled.div<WrapperProps>`
  grid-column: 9 / 11;
  grid-row: 1 / 2;
  align-self: center;
  z-index: 1;
  width: auto;
  border-radius: 5px;
  @media (max-width: 1800px) {
    grid-column: 8 / 11;
  }
  @media (max-width: 1150px) {
    grid-column: 6 / 11;
  }
  @media (max-width: 780px) {
    grid-column: 4 / 11;
  }
  @media (max-width: 580px) {
    margin: 0;
    top: 0;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-width: 250px;
  height: 100%;
  @media (max-width: 850px) {
    min-width: 150px;
  } ;
`;

export const StyledIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  @media (max-width: 850px) {
    justify-content: space-between;
    height: 20px;
    width: 20px;
  }
`;
