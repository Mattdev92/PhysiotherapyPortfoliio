import { FC } from 'react';
import { ContentWrapper } from './contentTemplate.styles';
import { ContentProps } from './contentTemplate.types';

const ContentTemplate: FC<ContentProps> = ({ children, refContent, mail }) => {
  return (
    <ContentWrapper ref={refContent} mail={mail}>
      {children}
    </ContentWrapper>
  );
};

export default ContentTemplate;
