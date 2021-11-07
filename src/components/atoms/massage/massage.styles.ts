import styled from 'styled-components';
import { DescriptionProps } from './massage.types';

export const Wrapper = styled.div`
  align-self: center;
  justify-self: center;
  position: relative;
  @media (max-width: 580px) {
    margin-bottom: 40px;
  }
`;

export const StyledImage = styled.img`
  align-self: center;
  justify-self: center;
  width: 300px;
  object-fit: cover;
  border-radius: 20px;
  @media (max-width: 1300px) {
    width: 200px;
  }
  @media (max-width: 580px) {
    width: 300px;
  }
`;

export const Description = styled.a<DescriptionProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.XS};
  opacity: ${({ show }) => (show ? '100%' : 0)};
  font-family: ${({ theme }) => theme.fontFamily.mainFont};
  color: black;
  background: ${({ theme }) => theme.colors.content};
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ show }) => (show ? '250px' : 0)};
  width: 300px;
  transition: all 1s ease;
  @media (max-width: 1300px) {
    width: 200px;
  }
  @media (max-width: 580px) {
    top: 0;
    width: 300px;
    font-size: ${({ theme }) => theme.fontSize.XS};
    height: ${({ show }) => (show ? '300px' : 0)};
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const ParagraphWrapper = styled.p`
  text-align: justify;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  padding-bottom: 5px;
`;
