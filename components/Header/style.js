import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
  padding-top: 10px;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    > img {
      width: 50px;
    }
    > p {
      font-family: 'Caesar Dressing', sans-serif;
      text-transform: uppercase;
      font-size: 30px;
      font-weight: 100;
      letter-spacing: 5px;
      color: var(--white);

      :hover {
        color: var(--orange)
      }
    }
  }

  > ul {
    display: none;
    gap: 16px;
    text-transform: uppercase;

    > li {
      cursor: pointer;
      color: var(--white);
      :hover {
        color: var(--orange);
      }
    }
  }

  @media (min-width: 768px) {
    ul {
      display: flex;
    }
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  > div {
    border: 1px solid var(--orange);
    display: none;
    padding: 5px 15px;
    color: var(--orange);
    border-radius: 5px;

    > input {
      font-size: 16px;
      color: var(--white);
      :focus {
        outline: none;
      }
    }
  }
  

  @media (min-width: 768px) {
    > div {
      display: flex;
    }
  }
`;