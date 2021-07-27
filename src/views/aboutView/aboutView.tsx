import MainViewContentContainer from 'components/molecules/mainViewContentContainer/mainViewContentContainer';
import SpecialTextContainer from 'components/molecules/specialTextContainer/specialTextContainer';
import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate';

const AboutView: FC = () => {
  return (
    <MainTemplate>
      <MainViewContentContainer />
      <SpecialTextContainer />
    </MainTemplate>
  );
};

export default AboutView;
