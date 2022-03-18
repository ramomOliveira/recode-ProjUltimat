import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #2121214d;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AsideLeft = styled.div`
  background-image: ${props => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 160px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 160px;
    margin-bottom: 0;
  }
`;
export const AsideRight = styled.div`
  margin-left: 10px;
  margin-bottom: 16px;
  > h2 {
    font-size: 20px;
    text-transform: uppercase;
  }

  > h3 {
    font-size: 14px;
    margin-top: 10px;
    color: gray;
  }

  > a > h1 {
    font-size: 30px;
    margin-top: 10px;
    :hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;