import styled from 'styled-components';

export const Container = styled.div`
  > h1 {
    font-weight: 900;
    font-size: 50px;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  > h2 {
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => props.theme.colors.textSecundary};
    margin-top: 20px;
  }
`;
