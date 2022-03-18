import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;

  > div { 
    margin-right: 16px;
    > h1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 50px;
    color: var(--orange);
    }

    > p {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 15px;
    }
  }

  
`;