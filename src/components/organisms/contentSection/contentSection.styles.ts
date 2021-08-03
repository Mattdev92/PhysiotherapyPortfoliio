import styled from 'styled-components';

export const ContentWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background: ${({ theme }) => theme.colors.content};
  grid-column: 3/13;
  grid-row: 1/4;
  overflow-y: scroll;
  @media (max-width: 580px) {
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`;
