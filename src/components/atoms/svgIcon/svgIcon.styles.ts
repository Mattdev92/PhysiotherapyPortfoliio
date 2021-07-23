import styled from 'styled-components';
import { IconProps } from './svgIcon.types';

export const SvgContainer = styled.div<IconProps>`
  height: ${({ height }) => height + 'px'};
  width: ${({ width }) => width + 'px'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
