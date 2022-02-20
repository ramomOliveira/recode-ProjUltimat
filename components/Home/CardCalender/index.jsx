import { Container } from './style';

export default function CardCalender({ imageUrl }) {
  return (
    <Container image={imageUrl}>
      <h2>Espetáculo teatral</h2>
      <h1>tudo que é imaginário existe, é e tem</h1>
      <p>Online e Presencial</p>
      <p>Oficina cultural oswald de andrade</p>
      <p>10 e 11 26/12/2021</p>
    </Container>
  );
}
