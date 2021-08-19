import { FC } from 'react';
import { PersonalImageWrapper, StyledImage } from './personalImage.styles';
import { PersonalImageProps } from './personalImage.types';
import B from 'assets/personalImage/b.jpg';

const PersonalImage: FC<PersonalImageProps> = ({ refSpecial }) => {
  return (
    <PersonalImageWrapper ref={refSpecial}>
      <StyledImage src={B} />
    </PersonalImageWrapper>
  );
};

export default PersonalImage;
