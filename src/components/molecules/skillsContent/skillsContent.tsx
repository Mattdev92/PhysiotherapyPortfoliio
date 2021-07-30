import { FC } from 'react';
import SkillsCategory from './skillsCategory/skillsCategory';
import { ContentWrapper } from './skillsContent.styles';

const SkillsContent: FC = () => {
  return (
    <ContentWrapper>
      <SkillsCategory />
      <SkillsCategory />
      <SkillsCategory />
      <SkillsCategory />
      <SkillsCategory />
    </ContentWrapper>
  );
};

export default SkillsContent;
