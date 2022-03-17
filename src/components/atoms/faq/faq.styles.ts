import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  align-self: flex-start;
  justify-self: center;
  font-size: 14px;
  height: 250px;
  width: 300px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
  overflow: scroll;
`;
