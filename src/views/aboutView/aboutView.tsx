import { FC } from 'react';
import AboutMeContentContainer from 'components/molecules/aboutContent/aboutContent';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
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
