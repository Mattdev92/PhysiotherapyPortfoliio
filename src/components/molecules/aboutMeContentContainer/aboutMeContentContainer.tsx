import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { aboutContentData } from 'helpers/helpers';
import { ContentWrapper } from './aboutMeContentContainer.styles';
import PersonalImage from 'assets/personalImage/p.jpg';
import { StyledImage } from './aboutMeContentContainer.styles';

const AboutMeContentContainer: FC = () => {
  return (
    <ContentWrapper>
      <StyledImage src={PersonalImage} />
      {aboutContentData.map((item, i) => (
        <Text
          content={item}
          key={item}
          fontWeight={'XM'}
          fontSize={'XS'}
          margin={10}
        />
      ))}
    </ContentWrapper>
  );
};

export default AboutMeContentContainer;
