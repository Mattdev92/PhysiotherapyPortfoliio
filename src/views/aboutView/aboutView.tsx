import { FC } from 'react';
import { about } from 'helpers/helpers';
import MainPageTemplate from 'templates/mainPageTemplate/mainPageContent';

const AboutView: FC = () => <MainPageTemplate content={about} />;

export default AboutView;
