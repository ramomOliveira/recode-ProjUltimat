import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  box-shadow: 0px 3px 6px #2121214d;
  width: 100%;

  :hover {
    box-shadow: 0px 3px 6px var(--light-orange);
  }

  @media (min-width: 768px) {
    width: min-content;
    height: 550px;
  }
`;

export const WrapperTop = styled.div`

`;

export const ImgArtist = styled.div`
  background-image: ${props => `url(${props.image})`} ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const WrapperInfo = styled.div`
  padding: 10px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  > h1 {
    text-transform: uppercase;
    font-size: 30px;
  }
  
`;



export const City = styled.div`
  margin-bottom: 15px;
  > h1 {
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 10px;
  }
  > p {
    font-size: 17px;
    font-weight: bold;
  }
`;


export const Tel = styled.div`
margin-bottom: 15px;
  > h1 {
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 10px;
  }
  > p {
    font-size: 17px;
    font-weight: bold;
  }
`;
