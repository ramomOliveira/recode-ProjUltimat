import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const WrapperForm = styled.form`
  border: 1px solid #BDBDBD;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #2121214d;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: min-content;
  

  > div {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    > h1 {
      font-size: 25px;
      margin-bottom: 32px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.textPrimary}
    }

    > div {
      display: flex;
      gap: 20px;
      

      > div {
        
        > h3 {
          font-size: 16px;
          margin-bottom: 8px;
          color: ${(props) => props.theme.colors.textPrimary};
        }

        > input {
          font-size: 16px;
          padding: 15px 16px;
          border: 1px solid ${(props) => props.theme.colors.textPrimary};
          border-radius: 4px;
          width: 400px;
        }
      }
    }
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  
  align-items: flex-end;
`;