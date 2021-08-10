import styled from 'styled-components';
import { DescriptionProps } from './project.types';

export const ProjectWrapper = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: reletive;
  cursor: pointer;
`;
export const StyledProject = styled.img`
  height: auto;
  width: 400px;
`;

export const CoverWrapper = styled.div`
  background: black;
  z-index: 2;
  position: absolute;
  top: 0;
  height: 400px;
  width: 400px;
  opacity: 50%;
  &:hover {
    opacity: 0;
    transition: height 0.5s ease-out;
  }
`;

export const Description = styled.div<DescriptionProps>`
  background: white;
  z-index: 2;
  position: absolute;
  bottom: 0;
  height: ${({ show }) => (show ? '150px' : 0)};
  width: 400px;
  transition: height 1s ease-in-out;
`;
