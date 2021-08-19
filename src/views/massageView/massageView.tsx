import { FC } from 'react';
import MainPageTemplate from 'templates/mainPageTemplate/mainPageContent';
import { main } from 'helpers/helpers';

const MassageView: FC = () => {
  return <MainPageTemplate content={main} />;
};

export default MassageView;
