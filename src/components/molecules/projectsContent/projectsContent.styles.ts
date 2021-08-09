import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 100px 15px 20px;
  grid-row: 1 / 4;
  grid-column: 1 / 11;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: auto;
  gap: 10px;
  justify-content: center;
`;
export const Project = styled.div`
  height: 300px;
  width: 300px;
  background: blue;
  cursor: pointer;
  margin: 10px;
`;
