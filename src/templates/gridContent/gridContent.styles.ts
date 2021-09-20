import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 45vh;
  width: 100%;
  left: 0;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  align-items: center;
  justify-content: center;
  gap: 10px 0;
  align-self: center;
`;
