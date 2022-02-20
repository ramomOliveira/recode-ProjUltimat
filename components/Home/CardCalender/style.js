import styled from 'styled-components';

export const Container = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  width: min-content;
  color: var(--white);
  text-transform: uppercase;
  padding: 16px;

  > h1 {
    font-size: 32px;
    margin-bottom: 8px;
  }
  > h2 {
    font-size: 28px;
    margin-bottom: 8px;
  }
  > p {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;
