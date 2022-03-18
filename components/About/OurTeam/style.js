import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--black);
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

`;

export const Title = styled.div`
  margin-right: 100px;
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
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
  
`;