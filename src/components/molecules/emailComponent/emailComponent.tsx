import { FC, useContext } from 'react';
import Text from 'components/atoms/text/text';
import { Wrapper } from './emailComponent.styles';
import { EmailProps } from './emailComponent.types';
import AppContext from 'context';

const EmailComponent: FC<EmailProps> = ({ refEmail }) => {
  const {
    store: { actualScreenWidth },
  } = useContext(AppContext);

  return (
    <Wrapper ref={refEmail}>
      <Text
        content={'mateuszgrzejszczyk1@gmail.com'}
        fontWeight={'M'}
        fontSize={
          actualScreenWidth < 580 || window.innerWidth < 580 ? 'XS' : 'S'
        }
        margin={'0'}
        color={'white'}
        pointer={true}
        click={() => window.open('mailto:mateusz.grzejszczyk1@gmail.com')}
        center
      />
    </Wrapper>
  );
};

export default EmailComponent;
