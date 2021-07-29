import { FC } from 'react';
import Nav from 'components/organisms/navigation/navigation';
import { MainWrapper } from './mainTemplate.styles';
import ContentSection from 'components/organisms/contentSection/contentSection';

const MainTemplate: FC = ({ children }) => {
  return (
    <MainWrapper>
      <Nav />
      <ContentSection>{children}</ContentSection>
    </MainWrapper>
  );
};

export default MainTemplate;
