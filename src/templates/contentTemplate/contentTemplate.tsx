import { FC } from 'react';
import { ContentWrapper } from './contentTemplate.styles';
import { ContentProps } from './contentTemplate.types';

const ContentTemplate: FC<ContentProps> = ({ children, refContent }) => {
  return <ContentWrapper ref={refContent}>{children}</ContentWrapper>;
};

export default ContentTemplate;
