import { FC } from 'react';
import { TextProps } from './text.types';
import { TextContainer } from './text.styles';

const Text: FC<TextProps> = (props) => {
  const { content } = props;
  return (
    <TextContainer ref={props.refText} {...props}>
      {content}
    </TextContainer>
  );
};

export default Text;
