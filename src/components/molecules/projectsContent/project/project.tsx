import { FC, useState } from 'react';
import {
  ProjectWrapper,
  StyledProject,
  CoverWrapper,
  Description,
} from './project.styles';
import { ProjectProps } from './project.types';
import Button from 'components/atoms/button/button';

const Project: FC<ProjectProps> = ({
  refProject,
  image,
  content,
  link,
  title,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <ProjectWrapper
      ref={refProject}
      onMouseLeave={() => setShowDescription(false)}
    >
      <StyledProject src={image} />
      <CoverWrapper onMouseOver={() => setShowDescription(true)} />
      <Description show={showDescription} href={link}>
        <h2>{title}</h2>
        {showDescription && content}
        <Button content="GITHUB" />
      </Description>
    </ProjectWrapper>
  );
};

export default Project;
