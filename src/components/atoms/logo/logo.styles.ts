import styled from 'styled-components';
import Text from 'components/atoms/text/text';

export const StyledText = styled(Text)`
  background: ${({ theme }) => theme.colors.helper};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 580px) {
    margin: 30px 0 50px;
    background: white;
  }
`;
