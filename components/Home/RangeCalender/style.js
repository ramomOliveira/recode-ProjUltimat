import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  > h1 {
    font-size: 40px;
  }
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
