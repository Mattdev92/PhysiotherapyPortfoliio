import { FC } from 'react';
import { TextWrapper } from './textMetextContainer.styles';
import Text from 'components/atoms/text/text';

const HelloTextContainer: FC = () => {
  return (
    <TextWrapper>
      <Text
        content={'Napisz do mnie !'}
        fontSize={'M'}
        fontWeight={'M'}
        margin={0}
      />
    </TextWrapper>
  );
};

export default HelloTextContainer;
