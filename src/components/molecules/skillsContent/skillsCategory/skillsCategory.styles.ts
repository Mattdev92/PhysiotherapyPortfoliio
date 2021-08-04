import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
`;

export const TextWrapper = styled.span`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 150px;
`;

export const SkillsWrapper = styled.div`
  width: 100%;
  margin: 0 20px;
  grid-column: 2/6;
  grid-row: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 580px) {
    grid-column: 1/6;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TitleWrapper = styled.span`
  grid-column: 2/6;
  grid-row: 1/2;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    justify-content: left;
    align-items: left;
  }
`;
