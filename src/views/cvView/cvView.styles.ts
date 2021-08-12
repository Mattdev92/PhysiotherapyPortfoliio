import styled from 'styled-components';

export const StyledCv = styled.img`
  margin: 0;
  height: 80%;
  width: auto;
  @media (max-width: 600px) {
    max-width: 80vw;
    height: auto;
  }
  @media (max-width: 1280px) {
    height: 60%;
    margin-bottom: 20px;
  }
`;
