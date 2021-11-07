import styled from 'styled-components';

export const StyledButton = styled.button`
  color: black;
  padding: 15px 16px;
  text-align: center;
  text-decoration: none;
  align-self: center;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.helper};
  border-radius: 5px;
  width: 200px;
  font-size: 20px;
  max-width: 100%;
  &:hover {
    background: ${({ theme }) => theme.colors.helper};
    border: 2px solid ${({ theme }) => theme.colors.white};
  }
`;
