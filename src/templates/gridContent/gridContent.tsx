import { FC, ReactNode } from 'react';
import { Wrapper } from './gridContent.styles';

const GridContent: FC<{ children: ReactNode; height: number }> = ({
  children,
  height,
}) => {
  return <Wrapper height={height}>{children}</Wrapper>;
};

export default GridContent;
