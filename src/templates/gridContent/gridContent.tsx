import { FC } from 'react';
import { Wrapper } from './gridContent.styles';

const GridContent: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default GridContent;
