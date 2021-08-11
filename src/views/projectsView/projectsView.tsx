import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import ProjectsContent from 'components/molecules/projectsContent/projectsContent';

const ProjectsView: FC = () => (
  <MainTemplate>
    <ProjectsContent />
  </MainTemplate>
);

export default ProjectsView;
