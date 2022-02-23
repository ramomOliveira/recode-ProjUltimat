import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  
  height: 100vh;
  width: 100vw;

  @media (min-width: 768px) {
    grid-template-columns: 10% 1fr;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  padding: 1.75rem;
`;
