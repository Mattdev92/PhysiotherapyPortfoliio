import { FC } from 'react';
import { TextProps } from './text.types';
import { TextContainer } from './text.styles';

const Text: FC<TextProps> = ({ content }) => (
  <TextContainer>{content}</TextContainer>
);

export default Text;
