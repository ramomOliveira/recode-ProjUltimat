import styled from 'styled-components';

export const Container = styled.div`
  background-color: 
    var(--orange);

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 20% 1fr;
  }
`;

export const WrapperLeft = styled.div`
  > h1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 50px;

    > span {
      color: var(--white);
    }
  }
`;

export const WrapperRight = styled.div`
  > p {
    font-size: 20px;
    line-height: 24px;
  }
`;
