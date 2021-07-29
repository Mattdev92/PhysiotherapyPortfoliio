import { FC } from 'react';
import Text from 'components/atoms/text/text';
import {
  mainContentData,
  mainContentDataFontSize,
  mainContentDataFontWight,
} from 'helpers/helpers';
import ContentTemplate from 'templates/contentTemplate/contentTemplate';

const MainPageContent: FC = () => {
  return (
    <ContentTemplate>
      {mainContentData.map((item, i) => (
        <Text
          content={item}
          key={item}
          fontWeight={mainContentDataFontWight[i]}
          fontSize={mainContentDataFontSize[i]}
          margin={10}
          background={item === 'WEB DEVELOPER' ? true : false}
        />
      ))}
    </ContentTemplate>
  );
};

export default MainPageContent;
