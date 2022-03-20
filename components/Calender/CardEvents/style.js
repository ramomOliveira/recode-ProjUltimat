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
  height: 300px;

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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  > h1 {
    text-transform: uppercase;
  }
  > p {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Profession = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  > h1 {
    text-transform: uppercase;
  }
  > p {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const City = styled.div`
  margin-bottom: 10px;
  > h1 {
    text-transform: uppercase;
  }
  > p {
    font-size: 17px;
    font-weight: bold;
  }
`;

export const Email = styled.div`
margin-bottom: 10px;
  > h1 {
    text-transform: uppercase;
  }
  > p {
    font-size: 17px;
    font-weight: bold;
  }
`;

export const Tel = styled.div`
margin-bottom: 10px;
  > h1 {
    text-transform: uppercase;
  }
  > p {
    font-size: 17px;
    font-weight: bold;
  }
`;
