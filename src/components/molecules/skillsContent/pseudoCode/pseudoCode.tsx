import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { pseudoCodeSection } from 'helpers/helpers';
import { PseudoCodeWrapper } from './pseudoCode.styled';

const PseudoCode: FC = () => {
  return (
    <PseudoCodeWrapper>
      {pseudoCodeSection.map((item) => (
        <Text
          content={item}
          fontSize={'XXS'}
          fontWeight={'XS'}
          margin={0}
          color={'blue'}
          marginLeft={5}
          key={item}
        />
      ))}
    </PseudoCodeWrapper>
  );
};

export default PseudoCode;
