import { Container } from './style';

export default function Title({ title, subTitle }) {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </Container>
  );
}
