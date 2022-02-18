import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(
    to right,
    var(--orange),
    var(--light-orange),
    var(--white) 99%
  );

  display: grid;
  grid-template-columns: 20% 80%;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  gap: 30px;
`;

export const WrapperLeft = styled.div`
  > h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
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
