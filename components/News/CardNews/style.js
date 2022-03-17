import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #2121214d;
`;

export const AsideLeft = styled.div`
  background-image: ${props => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 160px;
  height: 160px;
`;
export const AsideRight = styled.div`
  margin-left: 10px;

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
`;