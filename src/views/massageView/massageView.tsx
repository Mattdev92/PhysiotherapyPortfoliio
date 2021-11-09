import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import Massage from 'components/atoms/massage/massage';
import GridContent from 'templates/gridContent/gridContent';
import styled from 'styled-components';
import { massageData } from 'helpers/helpers';
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MassageView: FC = () => {
  return (
    <MainTemplate>
      <GridContent>
        {massageData.map((data, i) => (
          <ContentWrapper>
            <h1>{data.title}</h1>
            <Massage key={i} data={data} />
          </ContentWrapper>
        ))}
      </GridContent>
    </MainTemplate>
  );
};

export default MassageView;
