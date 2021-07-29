import { FC } from 'react';
import { ContentWrapper } from './contentSection.styles';
import { ContentSectionProps } from './contentSection.types';
import SocialNetworkIcons from 'components/molecules/socialNetworkIcons/socialNetworkIcons';

const ContentSection: FC<ContentSectionProps> = ({ children }) => {
  return (
    <ContentWrapper>
      <SocialNetworkIcons />
      {children}
    </ContentWrapper>
  );
};

export default ContentSection;
