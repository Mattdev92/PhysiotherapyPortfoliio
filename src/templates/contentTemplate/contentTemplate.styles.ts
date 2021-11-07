import styled from 'styled-components';
import { ContentWrapperProps } from './contentTemplate.types';

export const ContentWrapper = styled.div<ContentWrapperProps>`
  margin: 0;
  display: inline-block;
  grid-row: ${({ mail }) => (mail ? '2/3' : '1/3')};
  grid-column: ${({ mail }) => (mail ? '1/5' : '1/6')};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${({ mail }) => (mail === true ? 'center' : 'left')};
  width: fit-content;
  background: ${({ theme }) => theme.colors.content};
  @media (max-width: 1000px) {
    margin: 0px;
    padding: 0 20px;
  }
`;
