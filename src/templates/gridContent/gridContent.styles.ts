import styled from 'styled-components';
interface Props {
  height: number;
}
export const Wrapper = styled.div<Props>`
  margin: 5px;
  padding: 10px;
  grid-column: 1/11;
  grid-row: 1/4;
  max-width: 100%;
  max-height: 100%;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: ${({ height }) => `minmax(${height}px, 1fr)`};
  align-items: center;
  justify-content: center;
  gap: 15px 15px;
`;
