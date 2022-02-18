import { Container } from './style';

export default function Button({ children, type = 'button', onClick }) {
  return (
    <Container onClick={onClick} type={type}>
      {children}
    </Container>
  );
}
