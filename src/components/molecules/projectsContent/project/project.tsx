import { FC, useState } from 'react';
import {
  ProjectWrapper,
  StyledProject,
  CoverWrapper,
  Description,
} from './project.styles';
import { ProjectProps } from './project.types';

const Project: FC<ProjectProps> = ({ refProject, image, content, link }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <ProjectWrapper
      ref={refProject}
      onMouseLeave={() => setShowDescription(false)}
    >
      <StyledProject src={image} />
      <CoverWrapper onMouseOver={() => setShowDescription(true)} />
      <Description show={showDescription} href={link}>
        {showDescription && content}
      </Description>
    </ProjectWrapper>
  );
};

export default Project;
