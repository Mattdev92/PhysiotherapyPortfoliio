import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { specialText } from 'helpers/helpers';
import { SpecialTextWrapper } from './specialTextContainer.styles';

const SpecialTextContainer: FC = () => {
  return (
    <SpecialTextWrapper>
      <Text
        content={specialText}
        fontWeight={'XS'}
        fontSize={'XS'}
        margin={10}
        specialFont
      />
    </SpecialTextWrapper>
  );
};

export default SpecialTextContainer;
