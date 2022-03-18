import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import Button from '../Button';
import { styles, Container, WrapperButton } from './style';

export default function MenuBurger() {
  return (
    <Container className="margins">
      <Menu styles={styles}>
        <a href="/">
          <Link href="/">Inicio</Link>
        </a>

        <a href="/noticias">
          <Link href="/noticias">Notícias</Link>
        </a>

        <a href="/agenda">
          <Link href="/agenda">Agenda</Link>
        </a>

        <a href="/quem-somos">
          <Link href="/quem-somos">Sobre</Link>
        </a>

        <a href="/artistas">
          <Link href="/artistas">Artistas</Link>
        </a>

        <WrapperButton>
          <Button type="button">
            <Link href="/autenticacao">Cadastrar</Link>
          </Button>
          <Button type="button">
            <Link href="/usuario">Login</Link>
          </Button>
        </WrapperButton>
      </Menu>
    </Container>
  );
}
