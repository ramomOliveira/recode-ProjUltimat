import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/images/fundo.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #2121214d;
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;

  > button {
    color: white;
    :hover {
      color: black;
    }
  }
`;

export const TitleH1 = styled.div`
  font-size: 30px;
  font-weight: 600;
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;

  > h2 {
    font-size: 20px;
    text-transform: uppercase;
  }
`;

