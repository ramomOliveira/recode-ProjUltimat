import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

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
