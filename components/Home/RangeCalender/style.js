import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  > h1 {
    font-size: 40px;
  }
`;

export const WrapperCards = styled.div``;
