import Button from "../../../Button";
import Link from 'next/link';
import { Container, WrapperSearch } from './style';

export default function HeaderCalender() {
  return (
    <Container>
      <WrapperSearch>
        <input type="search" />
        <Button link >Buscar</Button>
      </WrapperSearch>
      <Link href="/usuario/adicionar-evento"><Button blackMode >Adicionar Evento</Button></Link>
    </Container>
  )
}