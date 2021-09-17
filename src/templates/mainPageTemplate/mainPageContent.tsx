import { FC, useEffect, useRef } from 'react';
import Text from 'components/atoms/text/text';
import {
  mainContentDataFontSize,
  mainContentDataFontWight,
  mainContentDataFontSizeWidth,
} from 'helpers/helpers';
import ContentTemplate from 'templates/contentTemplate/contentTemplate';
import { MainPageTemplateProps } from './mainPageContent.types';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import PersonalImage from 'components/molecules/personalImage/personalImage';
import gsap from 'gsap';
import { Power0 } from 'gsap';
import HandShake from 'components/atoms/handShake/handShake';
import Button from 'components/atoms/button/button';
import { ButtonWrapper } from './msinPageContent.styles';

const MainPageTemplate: FC<MainPageTemplateProps> = ({
  content,
  mail,
  pointer,
  children,
}) => {
  const width = window.innerWidth;
  const refContent = useRef(null);
  const refSpecial = useRef(null);
  useEffect(() => {
    const contentTimeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    contentTimeline.from(refContent.current, {
      opacity: 0,
      ease: Power0.easeOut,
      duration: 1,
      delay: 0.2,
    });
    contentTimeline.from(refSpecial.current, {
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
        {children}
        {content.map((item, i) => (
          <Text
            pointer={pointer}
            content={item}
            key={item}
            fontWeight={mainContentDataFontWight[i]}
            fontSize={
              width > 1100
                ? mainContentDataFontSize[i]
                : mainContentDataFontSizeWidth[i]
            }
            margin={`20px 0px`}
            background={
              item === 'Licencjonowany fizjoterapeuta' ||
              item === 'Cześć tu Błażej Pietroń !' ||
              item === '696 752 302'
                ? true
                : false
            }
            center={false}
          />
        ))}
        {mail && (
          <ButtonWrapper>
            <Button content={'Blazej@gmail.com'} />
          </ButtonWrapper>
        )}
      </ContentTemplate>
      <HandShake />
      <PersonalImage refSpecial={refSpecial} />
    </MainTemplate>
  );
};

export default MainPageTemplate;
