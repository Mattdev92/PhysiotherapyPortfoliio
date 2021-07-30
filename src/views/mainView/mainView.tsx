import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import MainPageContent from 'components/molecules/mainPageContent/mainPageContent';
import SpecialTextContainer from 'components/molecules/mainPageContent/quoteText/quoteText';

const MainView: FC = () => (
  <MainTemplate>
    <MainPageContent />
    <SpecialTextContainer />
  </MainTemplate>
);

export default MainView;
