import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-self: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  height: 250px;
  width: 300px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
  overflow: scroll;
`;
