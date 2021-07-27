import { FC } from 'react';
import Text from 'components/atoms/text/text';
import {
  mainContentData,
  mainContentDataFontSize,
  mainContentDataFontWight,
} from 'helpers/helpers';
import { ContentWrapper } from './mainViewContentContainer.styles';

const MainViewContentContainer: FC = () => {
  return (
    <ContentWrapper>
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
    </ContentWrapper>
  );
};

export default MainViewContentContainer;
