import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;  
  > h1 {
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

export const WrapperEvents = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
`;