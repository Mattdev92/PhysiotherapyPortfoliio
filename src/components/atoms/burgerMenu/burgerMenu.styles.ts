import styled from 'styled-components';

export const BurgerWrapper = styled.div`
  display: none;
  width: 40px;
  height: 30px;
  @media (max-width: 580px) {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
  } ;
`;
export const OuterLine = styled.span`
  width: 40px;
  height: 2px;
  border-bottom: 2px solid black;
`;
export const InnerLine = styled.span`
  width: 40px;
  height: 2px;
  border-bottom: 2px solid black;
`;
