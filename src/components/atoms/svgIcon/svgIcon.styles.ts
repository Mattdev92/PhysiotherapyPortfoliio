import styled from 'styled-components';
import { IconProps } from './svgIcon.types';

export const SvgContainer = styled.svg<IconProps>`
  height: ${({ height }) => height + 'px'};
  width: ${({ width }) => width + 'px'};
  max-width: 200px;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
