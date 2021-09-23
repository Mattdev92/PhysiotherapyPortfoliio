import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 50px;
  top: 35vh;
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
  @media (max-width: 580px) {
    top: 50px;
  }
`;
