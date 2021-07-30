import { FC } from 'react';
import {
  TextWrapper,
  Wrapper,
  TitleWrapper,
  SkillsWrapper,
} from './skillsCategory.styles';
import Text from 'components/atoms/text/text';
import PseudoCode from '../pseudoCode/pseudoCode';
import { SkillsProps } from './skillsContent.types';

const SkillsCategory: FC<SkillsProps> = ({ skill }) => {
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
        {skill.map((item) => {
          return (
            <TextWrapper>
              <Text fontSize={'S'} fontWeight={'S'} margin={5} content={item} />{' '}
            </TextWrapper>
          );
        })}
      </SkillsWrapper>
    </Wrapper>
  );
};
export default SkillsCategory;
