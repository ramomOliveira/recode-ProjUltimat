import styled from 'styled-components';

export const Container = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  text-transform: uppercase;
  background-color: var(--light-orange);
  color: var(--white);

  :hover {
    color: var(--orange);
    border: 2px solid var(--white);
    background-color: transparent;
  }
`;
