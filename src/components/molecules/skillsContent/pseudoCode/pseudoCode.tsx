import { FC } from 'react';
import Text from 'components/atoms/text/text';
import { pseudoCodeMain } from 'helpers/helpers';
import { PseudoCodeWrapper } from './pseudoCode.styled';
const PseudoCode: FC = () => {
  return (
    <PseudoCodeWrapper>
      {pseudoCodeMain.map((item, i) => (
        <Text
          content={item}
          fontSize={'XXS'}
          fontWeight={'XS'}
          margin={50}
          color={'blue'}
          marginLeft={5}
        />
      ))}
    </PseudoCodeWrapper>
  );
};
export default PseudoCode;
