import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div { 
    margin-right: 16px;
    > h1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 50px;
      color: var(--orange);
      margin-bottom: 16px;
    }

    > p {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    > div {
      > h1 {
        margin-bottom: 0;
      }
    }
  }
  
`;