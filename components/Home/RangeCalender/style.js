import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
  

  @media (min-width: 768px) {
    grid-template-columns: 30% 1fr;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  > h1 {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
