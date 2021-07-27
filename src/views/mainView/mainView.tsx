import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate';
import ContentContainer from 'components/molecules/mainViewContentContainer/mainViewContentContainer';
import SpecialTextContainer from 'components/molecules/specialTextContainer/specialTextContainer';

const MainView: FC = () => (
  <MainTemplate>
    <ContentContainer />
    <SpecialTextContainer />
  </MainTemplate>
);

export default MainView;
