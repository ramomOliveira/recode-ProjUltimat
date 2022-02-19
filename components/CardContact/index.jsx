import Button from '../Button';
import { Container, WrapperTop, WrapperVertical, WrapperButton } from './style';

export default function CardContact() {
  return (
    <Container className="margins">
      <WrapperTop>
        <h1>Contato</h1>

        <div>
          <WrapperVertical>
            <h3>Nome</h3>
            <input type="text" name="" id="" />
          </WrapperVertical>

          <WrapperVertical>
            <h3>Email</h3>
            <input type="text" name="" id="" />
          </WrapperVertical>
        </div>
      </WrapperTop>

      <div>
        <WrapperVertical>
          <h3>Mensagem</h3>
          <textarea name="mensagem" id="mensagem" rows="5" />
        </WrapperVertical>
      </div>
      <WrapperButton>
        <Button>Enviar</Button>
      </WrapperButton>
    </Container>
  );
}
