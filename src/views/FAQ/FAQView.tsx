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
  font-family: ${({ theme }) => theme.fontFamily.mainFont};
  font-size: 16px;
`;
export const Wrapper = styled.span`
  text-align: justify;
  font-family: ${({ theme }) => theme.fontFamily.mainFont};
  letter-spacing: 1px;
  font-size: 12px;
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
