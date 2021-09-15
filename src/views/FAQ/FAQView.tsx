import { FC } from 'react';
import MainTemplate from 'templates/mainTemplate/mainTemplate';
import GridContent from 'templates/gridContent/gridContent';
import { faqData } from 'helpers/helpers';

const FAQView: FC = () => {
  return (
    <MainTemplate>
      <GridContent>
        {faqData.map(({ title }, i: number) => (
          <div key={i}>{title}</div>
        ))}
      </GridContent>
    </MainTemplate>
  );
};

export default FAQView;
