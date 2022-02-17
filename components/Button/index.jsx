import { Container } from './style';

export default function Button({ children, type = 'button' }) {
  return <Container type={type}>{children}</Container>;
}
