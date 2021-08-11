import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-column: 5/10;
  grid-row: 3/4;
  border: none;
  color: white;
  padding: 15px 16px;
  text-align: center;
  text-decoration: none;
  align-self: center;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.helper};
  border-radius: 5px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
