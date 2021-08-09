import { FC } from 'react';
import { ProjectWrapper, StyledProject, CoverWrapper } from './project.styles';
import { ProjectProps } from './project.types';

const Project: FC<ProjectProps> = ({ refProject, image }) => (
  <ProjectWrapper ref={refProject}>
    <StyledProject src={image} />
    <CoverWrapper />
  </ProjectWrapper>
);

export default Project;
