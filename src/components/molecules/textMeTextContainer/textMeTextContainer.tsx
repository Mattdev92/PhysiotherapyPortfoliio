import { FC } from 'react';
import { Wrapper } from './textMetextContainer.styles';
import Text from 'components/atoms/text/text';
import { StyledImage } from './textMetextContainer.styles';
import PersonalImage from 'assets/personalImage/p.jpg';

const HelloTextContainer: FC = () => {
  return (
    <Wrapper>
      <Text
        content={'Napisz do mnie !'}
        fontSize={'M'}
        fontWeight={'M'}
        margin={0}
      />
      <StyledImage src={PersonalImage} />
    </Wrapper>
  );
};

export default HelloTextContainer;
