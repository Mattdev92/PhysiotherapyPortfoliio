import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { aboutContentData } from 'helpers/helpers';
import PersonalImage from 'assets/personalImage/p.jpg';
import { StyledImage } from './aboutContent.styles';
import ContentTemplate from 'templates/contentTemplate/contentTemplate';

const AboutContent: FC = () => {
  return (
    <ContentTemplate>
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
    </ContentTemplate>
  );
};

export default AboutContent;
