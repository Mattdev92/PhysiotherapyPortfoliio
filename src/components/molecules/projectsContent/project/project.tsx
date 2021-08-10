import { FC, useState } from 'react';
import {
  ProjectWrapper,
  StyledProject,
  CoverWrapper,
  Description,
} from './project.styles';
import { ProjectProps } from './project.types';

const Project: FC<ProjectProps> = ({ refProject, image }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <ProjectWrapper ref={refProject}>
      <StyledProject src={image} />
      <CoverWrapper
        onMouseOver={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      />
      <Description show={showDescription} />
    </ProjectWrapper>
  );
};

export default Project;
