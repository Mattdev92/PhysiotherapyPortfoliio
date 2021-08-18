import styled from 'styled-components';

export const NavBannerWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin: 0;
  background: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 140px;
`;
export const Foot = styled.img`
  width: auto;
  height: 200px;
`;
