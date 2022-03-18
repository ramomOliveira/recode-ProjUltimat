import Link from 'next/link';
import Button from '../Button';


import { Container, WrapperLeft, WrapperRight } from './style';

export default function Header() {



  return (
    <Container className="margins">
      <WrapperLeft>
        <Link href="/">
          <div>
            <img src="/images/logo2.png" alt="" />
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

          <Link href="/artistas">
            <li>Artistas</li>
          </Link>
        </ul>
      </WrapperLeft>

      <WrapperRight>


        <Link href="/autenticacao">
          <Button>Cadastrar</Button>
        </Link>
        <Link href="/usuario">
          <Button>Login</Button>
        </Link>
      </WrapperRight>
    </Container>
  );
}
