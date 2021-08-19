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
  height: 450px;
  width: 600px;
  object-fit: cover;
  margin: 0;
  border-radius: 10px;
  overflow: scroll;
`;