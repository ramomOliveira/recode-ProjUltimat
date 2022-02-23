import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  background-image: linear-gradient(
    to right,
    var(--orange),
    var(--light-orange),
    var(--white) 98%
  );
`;

export const WrapperTop = styled.div`
  margin-bottom: 16px;

  > div {
    display: flex;
    flex-direction: column;
    
    gap: 16px;
  }

  > h1 {
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > h3 {
    color: var(--white);
    font-size: 16px;
  }

  > input {
    border: 1px solid var(--black);
    border-radius: 4px;
    padding: 10px 16px;
    margin-top: 8px;
    max-width: 100%;
  }

  > textarea {
    border: 1px solid var(--black);
    border-radius: 4px;
    padding: 10px 16px;
    margin-top: 8px;
    max-width: 100%;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
