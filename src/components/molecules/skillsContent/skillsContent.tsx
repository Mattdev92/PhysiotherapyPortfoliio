import { FC } from 'react';
import SkillsCategory from './skillsCategory/skillsCategory';
import { ContentWrapper } from './skillsContent.styles';
import {
  reactSkills,
  frontendEssentialsSkills,
  backendsSkills,
  backendFrameworks,
  platformsSkills,
  mobileDevelopment,
  toolsSkills,
  skillsCategories,
} from 'helpers/helpers';

const skills = [
  frontendEssentialsSkills,
  reactSkills,
  mobileDevelopment,
  backendsSkills,
  backendFrameworks,
  platformsSkills,
  toolsSkills,
];

const SkillsContent: FC = () => {
  return (
    <ContentWrapper>
      {skills.map((item, i) => (
        <SkillsCategory skill={item} category={skillsCategories[i]} />
      ))}
    </ContentWrapper>
  );
};

export default SkillsContent;
