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
    height: 300px;
    width: 300px;
  }
`;

export const Description = styled.a<DescriptionProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  text-decoration: none;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.XS};
  opacity: ${({ show }) => (show ? '100%' : 0)};
  font-family: ${({ theme }) => theme.fontFamily.mainFont};
  color: black;
  background: ${({ theme }) => theme.colors.content};
  z-index: 2;
  position: absolute;
  bottom: 0;
  height: ${({ show }) => (show ? '250px' : 0)};
  width: 400px;
  transition: all 1s ease-in-out;
  @media (max-width: 580px) {
    height: 300px;
    width: 300px;
    font-size: ${({ theme }) => theme.fontSize.XS};
    height: ${({ show }) => (show ? '250px' : 0)};
  }
`;
