import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    var(--orange),
    var(--light-orange),
    var(--white)
  );
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  > div {
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
    }
  }

  > ul {
    display: flex;
    gap: 16px;
    text-transform: uppercase;

    > li {
      cursor: pointer;
      :hover {
        color: var(--white);
      }
    }
  }
`;

export const WrapperRight = styled.div`
  > div {
    border: 2px solid var(--orange);
    display: flex;
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
  display: flex;
  align-items: center;
  gap: 16px;
`;
