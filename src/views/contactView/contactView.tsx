import { FC } from 'react';
import MainPageTemplate from 'templates/mainPageTemplate/mainPageContent';
import { phoneNumber } from 'helpers/helpers';

const ContactView: FC = () => {
  return <MainPageTemplate content={phoneNumber} />;
};

export default ContactView;
