import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { specialText } from 'helpers/helpers';
import { QuoteTextWrapper } from './quoteText.styles';
import { quoteProps } from './quoteText.types';

const QuoteText: FC<quoteProps> = ({ refSpcialText }) => {
  return (
    <QuoteTextWrapper ref={refSpcialText}>
      <Text
        content={specialText}
        fontWeight={'XS'}
        fontSize={'XS'}
        margin={10}
        specialFont
        center
      />
    </QuoteTextWrapper>
  );
};

export default QuoteText;
