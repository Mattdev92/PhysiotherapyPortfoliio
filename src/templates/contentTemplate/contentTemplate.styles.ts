import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 0;
  display: inline-block;
  grid-row: 1 / 3;
  grid-column: 1 / 6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  width: fit-content;
  background: ${({ theme }) => theme.colors.content};
  @media (max-width: 1000px) {
    margin: 0px;
  }
`;
