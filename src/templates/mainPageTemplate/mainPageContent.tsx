import { FC } from 'react';
import Text from 'components/atoms/text/text';
import {
  mainContentDataFontSize,
  mainContentDataFontWight,
} from 'helpers/helpers';
import ContentTemplate from 'templates/contentTemplate/contentTemplate';
import { MainPageTemplateProps } from './mainPageContent.types';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import SpecialTextContainer from 'components/molecules/quoteText/quoteText';

const MainPageTemplate: FC<MainPageTemplateProps> = ({ content }) => {
  return (
    <MainTemplate>
      <ContentTemplate>
        {content.map((item, i) => (
          <Text
            content={item}
            key={item}
            fontWeight={mainContentDataFontWight[i]}
            fontSize={mainContentDataFontSize[i]}
            margin={10}
            background={
              item === 'WEB DEVELOPER' ||
              item === 'CV' ||
              item === '500 239 053'
                ? true
                : false
            }
          />
        ))}
      </ContentTemplate>
      <SpecialTextContainer />
    </MainTemplate>
  );
};

export default MainPageTemplate;
