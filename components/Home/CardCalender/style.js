import styled from 'styled-components';

export const Container = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  height: 100%;
  color: var(--white);
  text-transform: uppercase;
  padding: 10px;

  
  > h1 {
    font-size: 42px;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
  }
  > p {
    font-size: 30px;
    line-height: 24px;
    margin-bottom: 16px;
  }
  > h2 {
    font-size: 25px;
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    gap: 0px;

    > h1 {
    font-size: 32px;
    margin-bottom: 20px;
    margin-top: 0px;
    text-align: center;
    }
    > p {
      font-size: 23px;
      line-height: 24px;
      margin-bottom: 16px;
    }
    > h2 {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
`;
