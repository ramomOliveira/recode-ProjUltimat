import { Container } from './style';

export default function Button({ children, type = 'button', onClick, link, deleteMode }) {
  return (
    <Container deleteMode={deleteMode} link={link} onClick={onClick} type={type}>
      {children}
    </Container>
  );
}
