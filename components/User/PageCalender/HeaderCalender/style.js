import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > button {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    > button {
      width: auto;
    }
  }
`;

export const WrapperSearch = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.textPrimary};
  border-radius: 4px;
  padding: 4px 16px;
  > input {
    font-size: 16px;
    :focus {
        outline: none;
      }
  }
`;