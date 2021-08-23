import { FC, useState } from 'react';
import {
  Wrapper,
  StyledImage,
  CoverWrapper,
  Description,
} from './massage.styles';
import MassagePhoto from 'assets/massagePhotos/massage.jpg';
import Button from 'components/atoms/button/button';

const Massage: FC = () => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <Wrapper onMouseLeave={() => setShowDescription(false)}>
      <StyledImage src={MassagePhoto} alt="asdsa" />
      <CoverWrapper
        onMouseOver={() => setShowDescription(true)}
        onClick={() => setShowDescription(true)}
      />
      <Description show={showDescription}>
        <h2>Masaż</h2>
        {showDescription && 'Lorem ipsum bla bla bla itp itd'}
        <Button content="GITHUB" />
      </Description>
    </Wrapper>
  );
};

export default Massage;
