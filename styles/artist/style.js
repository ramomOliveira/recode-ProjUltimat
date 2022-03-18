import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 40px;
  
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 50px;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


