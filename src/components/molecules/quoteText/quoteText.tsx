import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { specialText } from 'helpers/helpers';
import { QuoteTextWrapper } from './quoteText.styles';

const QuoteText: FC = () => {
  return (
    <QuoteTextWrapper>
      <Text
        content={specialText}
        fontWeight={'XS'}
        fontSize={'XS'}
        margin={10}
        specialFont
      />
    </QuoteTextWrapper>
  );
};

export default QuoteText;
