import styled from 'styled-components';
import { IconProps } from './svgIcon.types';

export const SvgContainer = styled.div<IconProps>`
  position: ${({ position }) => position};
  top: ${({ top }) => top + 'px'};
  height: ${({ height }) => height + 'px'};
  width: ${({ width }) => width + 'px'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  & svg {
    height: '100%';
    width: '100%';
  }
`;
