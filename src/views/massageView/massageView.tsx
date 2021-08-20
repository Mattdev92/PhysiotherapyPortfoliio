import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import MassageContent from 'components/molecules/massageContent/massageContent';

const MassageView: FC = () => {
  return (
    <MainTemplate>
      <MassageContent />
    </MainTemplate>
  );
};

export default MassageView;
