import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import GridContent from 'templates/gridContent/gridContent';
import { faqData } from 'helpers/helpers';
import Faq from 'components/atoms/faq/faq';

const FAQView: FC = () => {
  return (
    <MainTemplate>
      <GridContent>
        {faqData.map(({ title, description }, i: number) => (
          <Faq key={i}>
            <h1>{title}</h1>
            <p>{description}</p>
          </Faq>
        ))}
      </GridContent>
    </MainTemplate>
  );
};

export default FAQView;
