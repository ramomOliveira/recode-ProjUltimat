import { Container, WrapperLeft, WrapperRight } from './style';

export default function CardNews() {
  return (
    <Container className="margins">
      <WrapperLeft>
        <h1>Cultura Negra</h1>
        <p>
          Qual a importância da cultura negra para o Brasil? Os africanos
          contribuíram para a cultura brasileira em uma enormidade de aspectos:
          dança, música, religião, culinária e idioma... A influência da cultura
          africana é também evidente na culinária regional, especialmente na
          Bahia, onde foi introduzido o dendezeiro, uma palmeira africana da
          qual se extrai o azeite-de-dendê.
        </p>
      </WrapperLeft>

      <WrapperRight />
    </Container>
  );
}
