import styled from 'styled-components';

export const ContentWrapper = styled.section`
  margin: auto 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background: ${({ theme }) => theme.colors.content};
  grid-column: 2/12;
  grid-row: 2/4;
  @media (max-width: 580px) {
    margin: 5px 0;
    height: 90vh;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`;
