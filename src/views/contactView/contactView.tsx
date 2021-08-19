import { FC } from 'react';
import MainPageTemplate from 'templates/mainPageTemplate/mainPageContent';
import { contact } from 'helpers/helpers';

const ContactView: FC = () => {
  return <MainPageTemplate content={contact} mail />;
};

export default ContactView;
