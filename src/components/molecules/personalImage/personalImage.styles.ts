import styled from 'styled-components';

export const PersonalImageWrapper = styled.div`
  margin: 10px;
  display: inline-block;
  grid-row: 1 / 4;
  grid-column: 7 / 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const StyledImage = styled.img`
  max-height: 100%;
  height: 450px;
  width: 100%;
  object-fit: cover;
  margin: 0;
  border-radius: 10px;
  overflow: scroll;
  @media (max-width: 580px) {
    height: 350px;
  }
`;
