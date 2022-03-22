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

export const TitleH3 = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ImgEvent = styled.div`
  background-image: ${props => `url(${props.image})`} ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;

export const WrapperHeader = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div > h1 {
    font-size: 40px;
    margin-bottom: 40px;
    font-size: 30px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    
  }
`;

export const WrapperImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 10px;
  }
`;

export const WrapperMain = styled.div`
  margin-bottom: 30px;
  > div {
    display: flex;
    gap: 100px;
  }
`;

export const WrapperAddress = styled.div`
  margin-bottom: 30px;
  margin-top: 60px;
  > div {
    display: flex;
    gap: 100px;
  }
`;

export const TextP = styled.p`
  font-size: 17px;
  line-height: 24px;
`;

export const WrapperContact = styled.div`
  margin-top: 60px;
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  
  > div > a {
    display: flex;
    gap: 10px;
    align-items: center;
    :hover{
      color: var(--orange);
      >div {
        background-image: url("/images/about/zapCor.svg");
        cursor: pointer;
      }
    }    
  }
`;

export const IconTel = styled.div`
  background-image: url("/images/about/zapBlack.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;

`;

export const IconEmail = styled.div`
background-image: url("/images/about/emailBlack.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  :hover {
    background-image: url("/images/about/emailCor.svg");
    cursor: pointer;
  }
`;

