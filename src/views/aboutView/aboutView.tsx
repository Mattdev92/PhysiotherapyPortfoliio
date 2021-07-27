import { FC } from 'react';
import AboutMeContentContainer from 'components/molecules/aboutMeContentContainer/aboutMeContentContainer';
import MainTemplate from 'templates/mainTemplate';
import HelloTextContainer from 'components/molecules/textMeTextContainer/textMeTextContainer';

const AboutView: FC = () => {
  return (
    <MainTemplate>
      <AboutMeContentContainer />
      <HelloTextContainer />
    </MainTemplate>
  );
};

export default AboutView;
