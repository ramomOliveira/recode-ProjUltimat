import Button from "../../../Button";
import { Container, WrapperSearch } from './style';

export default function HeaderCalender() {
  return (
    <Container>
      <WrapperSearch>
        <input type="search" />
        <Button link >Buscar</Button>
      </WrapperSearch>
      <Button>Adicionar Evento</Button>
    </Container>
  )
}