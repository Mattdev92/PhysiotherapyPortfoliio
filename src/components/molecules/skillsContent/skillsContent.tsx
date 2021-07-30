import { FC } from 'react';
import SkillsCategory from './skillsCategory/skillsCategory';
import { ContentWrapper } from './skillsContent.styles';
import { reactSkills, frontendEssentialsSkills } from 'helpers/helpers';

const skills = [frontendEssentialsSkills, reactSkills];

const SkillsContent: FC = () => {
  return (
    <ContentWrapper>
      {skills.map((item) => (
        <SkillsCategory skill={item} />
      ))}
    </ContentWrapper>
  );
};

export default SkillsContent;
