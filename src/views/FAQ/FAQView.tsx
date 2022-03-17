import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import GridContent from 'templates/gridContent/gridContent';
import { faqData } from 'helpers/helpers';
import Faq from 'components/atoms/faq/faq';
import styled from 'styled-components';

export const Title = styled.h3`
  text-align: left;
  max-width: 200px;
  min-width: 300px;
`;
export const Wrapper = styled.span`
  font-size: medium;
  text-align: justify;
  font-family: 'Smooch Sans', sans-serif;
  letter-spacing: 1px;
  font-size: 13px;
`;
const FAQView: FC = () => {
  return (
    <MainTemplate>
      <GridContent height={300}>
        {faqData.map(({ title, description }, i: number) => (
          <Faq key={i}>
            <Title>{title}</Title>
            <Wrapper>{description}</Wrapper>
          </Faq>
        ))}
      </GridContent>
    </MainTemplate>
  );
};

export default FAQView;
