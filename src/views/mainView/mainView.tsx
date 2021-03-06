import { FC } from 'react';
import MainPageTemplate from 'templates/mainPageTemplate/mainPageContent';
import { main } from 'helpers/helpers';

const MainView: FC = () => <MainPageTemplate content={main} />;

export default MainView;
