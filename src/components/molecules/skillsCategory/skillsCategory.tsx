import { FC } from 'react';
import { SkillsCategoryWrapper, Wrapper } from './skillsCategory.styles';
import Text from 'components/atoms/text/text';
import PseudoCode from '../pseudoCode/pseudoCode';

const SkillsCategory: FC = () => {
  return (
    <Wrapper>
      <PseudoCode />
      <SkillsCategoryWrapper>
        <Text
          fontSize={'M'}
          fontWeight={'M'}
          margin={5}
          content={'FRONTEND ESSENTIALS'}
        />
        <Text fontSize={'S'} fontWeight={'S'} margin={5} content={'HTML5'} />
        <Text fontSize={'S'} fontWeight={'S'} margin={5} content={'JS'} />
      </SkillsCategoryWrapper>
    </Wrapper>
  );
};
export default SkillsCategory;
