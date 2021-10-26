import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import Massage from 'components/atoms/massage/massage';
import GridContent from 'templates/gridContent/gridContent';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const massageTab = [1, 2, 3, 4];
const MassageView: FC = () => {
  return (
    <MainTemplate>
      <GridContent>
        {massageTab.map((i) => (
          <ContentWrapper>
            <h1>Masaż {i}</h1>
            <Massage key={i} />
          </ContentWrapper>
        ))}
      </GridContent>
    </MainTemplate>
  );
};

export default MassageView;
