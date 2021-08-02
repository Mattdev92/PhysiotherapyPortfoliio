import { FC } from 'react';
import MainPageTemplate from 'templates/mainPageTemplate/mainPageContent';
import { cv } from 'helpers/helpers';

const CvView: FC = () => {
  return <MainPageTemplate content={cv} />;
};

export default CvView;
