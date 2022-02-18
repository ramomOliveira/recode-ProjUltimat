import Link from 'next/link';
import Button from '../Button';

import { Container, WrapperLeft, WrapperRight } from './style';

export default function Header() {
  return (
    <Container className="margins">
      <WrapperLeft>
        <Link href="/">
          <div>
            <img src="/images/logo.png" alt="" />
            <p>Oluchi</p>
          </div>
        </Link>
        <ul>
          <Link href="/">
            <li>Início</li>
          </Link>
          <Link href="/noticias">
            <li>Notícias</li>
          </Link>
          <Link href="/agenda">
            <li>Agendas</li>
          </Link>
          <Link href="/quem-somos">
            <li>Sobre</li>
          </Link>
          <Link href="/categorias">
            <li>Categorias</li>
          </Link>
        </ul>
      </WrapperLeft>

      <WrapperRight>
        <div>
          <input type="search" />
          <span className="material-icons-outlined">search</span>
        </div>

        <Button>Cadastrar</Button>
        <Button>Login</Button>
      </WrapperRight>
    </Container>
  );
}
