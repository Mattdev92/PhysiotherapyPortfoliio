import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import Massage from 'components/atoms/massage/massage';
import GridContent from 'templates/gridContent/gridContent';

const massageTab = [1, 2, 3, 4];
const MassageView: FC = () => {
  return (
    <MainTemplate>
      <GridContent>
        {massageTab.map((i) => (
          <Massage key={i} />
        ))}
      </GridContent>
    </MainTemplate>
  );
};

export default MassageView;
