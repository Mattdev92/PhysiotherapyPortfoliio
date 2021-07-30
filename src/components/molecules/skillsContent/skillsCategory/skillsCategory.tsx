import { FC } from 'react';
import {
  TextWrapper,
  Wrapper,
  TitleWrapper,
  SkillsWrapper,
} from './skillsCategory.styles';
import Text from 'components/atoms/text/text';
import PseudoCode from '../pseudoCode/pseudoCode';

const SkillsCategory: FC = () => {
  return (
    <Wrapper>
      <PseudoCode />
      <TitleWrapper>
        <Text
          fontSize={'M'}
          fontWeight={'M'}
          margin={5}
          content={'FRONTEND ESSENTIALS'}
        />
      </TitleWrapper>
      <SkillsWrapper>
        <TextWrapper>
          <Text fontSize={'S'} fontWeight={'S'} margin={5} content={'HTML5'} />{' '}
        </TextWrapper>
        <TextWrapper>
          <Text fontSize={'S'} fontWeight={'S'} margin={5} content={'JS'} />
        </TextWrapper>
      </SkillsWrapper>
    </Wrapper>
  );
};
export default SkillsCategory;
