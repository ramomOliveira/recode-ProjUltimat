import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--black);
  padding-top: 20px;
  padding-bottom: 20px;
  
  @media (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.div`
  margin-right: 0;
  margin-bottom: 30px;
  > h1 {
    font-size: 50px;
    color: var(--orange);
    > span {
      color: var(--white);
    }
  }

  @media (min-width: 768px) {
    margin-right: 100px;
    margin-bottom: 0;
    > h1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 50px;
      color: var(--orange);
      > span {
        color: var(--white);
      }
    }
  }
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
  }
`;