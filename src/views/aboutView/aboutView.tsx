import { FC } from 'react';
import AboutContent from 'components/molecules/aboutContent/aboutContent';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import HelloTextContainer from 'components/molecules/textMe/textMe';

const AboutView: FC = () => {
  return (
    <MainTemplate>
      <AboutContent />
      <HelloTextContainer />
    </MainTemplate>
  );
};

export default AboutView;
