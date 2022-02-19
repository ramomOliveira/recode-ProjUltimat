import { Container } from './style';

export default function Button({ children, type = 'button', onClick, link }) {
  return (
    <Container link={link} onClick={onClick} type={type}>
      {children}
    </Container>
  );
}
