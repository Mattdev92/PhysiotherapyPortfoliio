import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 200px;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export const TextWrapper = styled.span`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SkillsWrapper = styled.span`
  margin: 0 20px;
  grid-column: 2/6;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
export const TitleWrapper = styled.span`
  grid-column: 2/6;
  grid-row: 1/2;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
