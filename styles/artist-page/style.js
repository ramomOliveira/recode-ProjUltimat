import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const TitleH2 = styled.h2`
  font-size: 25px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const WrapperHeader = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-size: 40px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > h1 {
      font-size: 30px;
      text-transform: uppercase;
      margin-top: 8px;
    }
  }
`;

export const ImgArtist = styled.div`
  background-image: ${props => `url(${props.image})`} ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
`;

export const TextP = styled.p`
  font-size: 17px;
  line-height: 24px;
`;

export const IconImg = styled.div``;