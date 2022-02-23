import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 35% 1fr;
  }
`;

export const WrapperLeft = styled.div`
  > h1 {
    font-size: 50px;
    margin-bottom: 16px;
  }

  > p {
    line-height: 24px;
  }
`;

export const WrapperRight = styled.div`
  background-image: url('/images/home/coverHomeWoman.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  width: 100%;
`;
