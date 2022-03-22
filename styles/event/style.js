import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const TitleH2 = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const TitleH3 = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const ImgEvent = styled.div`
  background-image: ${props => `url(${props.image})`} ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 180px;

  @media (min-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;

export const WrapperHeader = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  > div > h1 {
    margin-bottom: 40px;
    font-size: 19px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    > div > h1 {
      margin-bottom: 40px;
      font-size: 27px;
      text-transform: uppercase;
    }
  }
`;

export const WrapperImg = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    
  }
`;

export const WrapperMain = styled.div`
  margin-bottom: 20px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 768px) {
    margin-bottom: 30px;
    > div {
      display: flex;
      flex-direction: row;
      gap: 100px;
    }
  }
`;

export const WrapperAddress = styled.div`
  margin-bottom: 20px;
  margin-top: 30px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 768px) {
    margin-bottom: 30px;
    margin-top: 60px;
    > div {
      display: flex;
      flex-direction: row;
      gap: 100px;
    }
  }
`;

export const TextP = styled.p`
  font-size: 14px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const WrapperContact = styled.div`
  margin-top: 20px;
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

  @media (min-width: 768px) {
    margin-top: 60px;
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

