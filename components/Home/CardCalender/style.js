import styled from 'styled-components';

export const Container = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 350px;
`;

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--white);
  text-transform: uppercase;
  padding: 10px;

  
  > h1 {
    font-size: 32px;
    margin-bottom: 20px;
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
`;
