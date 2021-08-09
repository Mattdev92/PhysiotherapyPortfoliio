import { FC } from 'react';
import MainPageTemplate from 'templates/mainPageTemplate/mainPageContent';
import { cv } from 'helpers/helpers';
import CvImage from 'assets/cv/cv.png';
import { StyledCv } from './cvView.styles';

const CvView: FC = () => {
  return (
    <MainPageTemplate content={cv} pointer>
      <StyledCv src={CvImage} alt="cv" />
    </MainPageTemplate>
  );
};

export default CvView;
