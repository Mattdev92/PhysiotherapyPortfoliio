import { FC } from 'react';
import { ContentWrapper } from './contentSection.styles';
import { ContentSectionProps } from './contentSection.types';

const ContentSection: FC<ContentSectionProps> = ({ children }) => (
  <ContentWrapper>{children}</ContentWrapper>
);

export default ContentSection;
