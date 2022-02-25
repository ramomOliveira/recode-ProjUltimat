import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;

  > div {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const WrapperButton = styled.div`
  > button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
  }
`;

export const Range = styled.hr`
  margin: 20px 0;
  border: 1px solid var(--black);

`;

export const LoginOrRegister = styled.p`
  margin-top: 10px;
`;

export const WrapperWarning = styled.div`
  color: #fff;
  background-color: red;
  display: flex;
  align-items: center;
  padding: 3px 5px;
  border-radius: 4px;
  text-transform: uppercase;
  > div {
    width: 20px;
    margin-right: 10px;
  }
`;