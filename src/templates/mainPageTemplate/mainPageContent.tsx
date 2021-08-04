import React, { FC, useEffect, useRef } from 'react';
import Text from 'components/atoms/text/text';
import {
  mainContentDataFontSize,
  mainContentDataFontWight,
} from 'helpers/helpers';
import ContentTemplate from 'templates/contentTemplate/contentTemplate';
import { MainPageTemplateProps } from './mainPageContent.types';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import SpecialTextContainer from 'components/molecules/quoteText/quoteText';
import gsap from 'gsap';
import { Power0 } from 'gsap';
import EmailComponent from 'components/molecules/emailComponent/emailComponent';

const MainPageTemplate: FC<MainPageTemplateProps> = ({ content, mail }) => {
  const refContent = useRef(null);
  const refSpecialText = useRef(null);
  useEffect(() => {
    const contentTimeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    contentTimeline.from(refContent.current, {
      opacity: 0,
      ease: Power0.easeOut,
      duration: 1,
      delay: 0.2,
    });
    contentTimeline.from(refSpecialText.current, {
      opacity: 0,
      ease: Power0.easeOut,
      duration: 1,
      delay: 0.3,
    });
    contentTimeline.play();
  }, [refContent]);

  return (
    <MainTemplate>
      <ContentTemplate refContent={refContent}>
        {content.map((item, i) => (
          <Text
            content={item}
            key={item}
            fontWeight={mainContentDataFontWight[i]}
            fontSize={mainContentDataFontSize[i]}
            margin={10}
            background={
              item === 'WEB DEVELOPER' ||
              item === 'Pobierz CV' ||
              item === '500 239 053'
                ? true
                : false
            }
          />
        ))}
      </ContentTemplate>
      {mail ? (
        <EmailComponent refEmail={refSpecialText} />
      ) : (
        <SpecialTextContainer refSpcialText={refSpecialText} />
      )}
    </MainTemplate>
  );
};

export default MainPageTemplate;
