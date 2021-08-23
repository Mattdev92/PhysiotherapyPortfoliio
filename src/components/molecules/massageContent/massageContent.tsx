import { FC } from 'react';
import { Wrapper } from './massageContent.styles';
import Massage from './massage/massage';

const massageTab = [1, 2, 3, 4];

const MassageContent: FC = () => {
  return (
    <Wrapper>
      {massageTab.map((i) => (
        <Massage key={i} />
      ))}
    </Wrapper>
  );
};

export default MassageContent;
