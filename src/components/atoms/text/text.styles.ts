import styled from 'styled-components';
import { TextProps } from './text.types';

export const TextContainer = styled.span<TextProps>`
  width: 100%;
  margin: ${({ margin }) => margin + 'px'}${({ marginLeft = 0 }) => marginLeft + 'px'};
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
  font-family: ${({ specialFont = false, theme }) =>
      specialFont ? theme.fontFamily.specialFont : theme.fontFamily.mainFont},
    ${({ specialFont = false, theme }) =>
      specialFont ? theme.fontType.cursive : theme.fontType.serif};
  font-weight: ${({ fontWeight, theme }) => theme.fontWeight[fontWeight]};
  background: ${({ background = false, theme }) =>
    background ? theme.colors.main : 'none'};
  border: none;
  color: ${({ color = 'black' }) => color};
  @media (max-width: 580px) {
    width: auto;
    display: flex;

    font-size: ${({ specialFont, fontSize, theme }) =>
      specialFont ? theme.fontSize['S'] : theme.fontSize[fontSize]};
    margin-left: 5px;
    margin-right: 5px;
    text-align: justify;
  }
`;
