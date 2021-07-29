import { FC } from 'react';
import { ContentWrapper } from './contentTemplate.styles';

const ContentTemplate: FC = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default ContentTemplate;
