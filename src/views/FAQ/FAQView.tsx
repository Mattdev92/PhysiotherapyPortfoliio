import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import GridContent from 'templates/gridContent/gridContent';
import { faqData } from 'helpers/helpers';
import Faq from 'components/atoms/faq/faq';
import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 200px;
  text-align: center;
`;
const FAQView: FC = () => {
  return (
    <MainTemplate>
      <GridContent>
        {faqData.map(({ title, description }, i: number) => (
          <Faq key={i}>
            <Title>{title}</Title>
            <p>{description}</p>
          </Faq>
        ))}
      </GridContent>
    </MainTemplate>
  );
};

export default FAQView;
