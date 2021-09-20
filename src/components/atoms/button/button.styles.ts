import styled from 'styled-components';

export const StyledButton = styled.button`
  color: white;
  padding: 15px 16px;
  text-align: center;
  text-decoration: none;
  align-self: center;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.helper};
  border-radius: 5px;
  border: none;
  width: 200px;
  font-size: 20px;
  max-width: 100%;
`;
