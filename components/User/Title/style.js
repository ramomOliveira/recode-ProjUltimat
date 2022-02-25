import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div > h1 {
    font-weight: 900;
    font-size: 30px;
    color: ${(props) => props.theme.colors.textPrimary};
    
  }

  > div > h2 {
    font-weight: 400;
    font-size: 15px;
    color: ${(props) => props.theme.colors.textSecundary};
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    > div > h1 {
    font-size: 50px;
    }
    > div > h2 {
    font-size: 20px;
    margin-top: 20px;
    }
  }
`;
