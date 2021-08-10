import styled from 'styled-components';
import { DescriptionProps } from './project.types';

export const ProjectWrapper = styled.div`
  text-decoration: none;
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: reletive;
  cursor: pointer;
  @media (max-width: 580px) {
    height: 300px;
    width: 300px;
    margin: 0;
  }
`;
export const StyledProject = styled.img`
  height: auto;
  width: 400px;
  @media (max-width: 580px) {
    width: 300px;
  }
`;

export const CoverWrapper = styled.div`
  background: black;
  z-index: 2;
  position: absolute;
  top: 0;
  height: 400px;
  width: 400px;
  opacity: 20%;
  &:hover {
    opacity: 0;
    transition: height 0.5s ease-out;
  }
  @media (max-width: 580px) {
    display: none;
  }
`;

export const Description = styled.a<DescriptionProps>`
  text-decoration: none;
  color: black;
  background: white;
  z-index: 2;
  position: absolute;
  bottom: 0;
  height: ${({ show }) => (show ? '150px' : 0)};
  width: 400px;
  transition: height 1s ease-in-out;
`;
