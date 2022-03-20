import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: none;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  @media (min-width: 768px) {
    display: flex;
    
  }
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
      height: 3.5rem;
      width: 100%;
      font-size: 0.688rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors.textPrimary};
      gap: 10px;
          
      :hover {
       color: ${(props) => props.theme.colors.hoverColor};
      } 

      @media (min-width: 768px) {
        font-size: 1rem;
        height: 4rem;
      }
    }

  }
`;

export const WrapperLogout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  

  > button {
    color: #8B0000  ;
    :hover {
    background-color: transparent;
    color: var(--red);
    }
  }
  
`;