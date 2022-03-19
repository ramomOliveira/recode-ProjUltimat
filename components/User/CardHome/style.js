import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #2121214d;
  :hover {
    box-shadow: 0px 3px 6px var(--orange);
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a >  button > span {
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 30px;
    :hover {
      color: var(--orange);
    }
  }
`;

export const TitleH1 = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.textPrimary};
  > h2 {
    font-size: 20px;
    text-transform: uppercase;
  }
  > p {
    line-height: 24px;
  }
`;

