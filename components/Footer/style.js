import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  border-top: 1px solid var(--orange);
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    
  }
`;

export const Info = styled.div`
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
`;
export const IconsSocial = styled.div`
  display: flex;
  gap: 20px;
`;
