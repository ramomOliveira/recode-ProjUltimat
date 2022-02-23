import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Logo = styled.div`
  margin-top: 20px;
  
  
`;

export const WrapperNavigation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;

    > a > li {   
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 4rem;
      width: 100%;
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors.textPrimary};
      gap: 10px;
          
      :hover {
       color: ${(props) => props.theme.colors.hoverColor};
      } 
      
    }

  }
`;

export const WrapperLogout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  > a > li {
    color: red;
    :hover {
    color: red;
    }
  }
  
`;