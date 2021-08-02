import { FC } from 'react';
import MainPageTemplate from 'templates/mainPageTemplate/mainPageContent';
import { developer } from 'helpers/helpers';

const MainView: FC = () => {
  return <MainPageTemplate content={developer} />;
};

export default MainView;
