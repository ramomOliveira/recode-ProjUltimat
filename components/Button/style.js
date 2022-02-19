import styled from 'styled-components';

export const Container = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  text-transform: ${(props) => (props.link ? 'none' : 'uppercase')};
  background-color: ${(props) =>
    props.link ? 'transparent' : 'var(--light-orange)'};
  color: ${(props) => (props.link ? 'var(--orange)' : 'var(--white)')};
  text-decoration: ${(props) => (props.link ? 'underline' : 'none')};

  :hover {
    color: ${(props) => (props.link ? 'var(--black)' : 'var(--orange)')};
    border: ${(props) => (props.link ? 'none' : '2px solid var(--white)')};
    background-color: transparent;
  }
`;
