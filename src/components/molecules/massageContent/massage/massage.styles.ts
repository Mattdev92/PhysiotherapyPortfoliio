import styled from 'styled-components';
import { DescriptionProps } from './massage.props';

export const Wrapper = styled.div`
  align-self: center;
  justify-self: center;
  position: relative;
`;
export const StyledImage = styled.img`
  align-self: center;
  justify-self: center;
  width: 300px;
  object-fit: cover;
  border-radius: 20px;
`;
export const CoverWrapper = styled.div`
  background: black;
  z-index: 2;
  position: absolute;
  top: 0;
  height: 300px;
  width: 300px;
  opacity: 20%;
  border-radius: 20px;
  &:hover {
    opacity: 0;
    transition: opacity 0.5s ease-out;
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
  top: 160px;
  left: 0;
  height: ${({ show }) => (show ? '250px' : 0)};
  width: 300px;
  transition: all 1s ease;

  @media (max-width: 580px) {
    top: 0;
    width: 300px;
    font-size: ${({ theme }) => theme.fontSize.XS};
    height: ${({ show }) => (show ? '300px' : 0)};
  }
`;
