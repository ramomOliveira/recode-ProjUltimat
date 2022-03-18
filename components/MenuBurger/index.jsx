import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../Button';
import { styles, Container, WrapperButton, Logo } from './style';

export default function MenuBurger() {
  const [menu, setMenu] = useState();

  const openMenu = () => {
    setMenu(false)
  }
  return (
    <Container className="margins">
      <Menu styles={styles} isOpen={menu}>
        <a onClick={openMenu} href="/" >
          <Link href="/">Inicio</Link>
        </a>

        <a onClick={openMenu} href="/noticias">
          <Link href="/noticias">Notícias</Link>
        </a>

        <a onClick={openMenu} href="/agenda">
          <Link href="/agenda">Agenda</Link>
        </a>

        <a onClick={openMenu} href="/quem-somos">
          <Link href="/quem-somos">Sobre</Link>
        </a>

        <a onClick={openMenu} href="/artistas">
          <Link href="/artistas">Artistas</Link>
        </a>

        <WrapperButton>
          <Button onClick={openMenu} type="button">
            <Link href="/autenticacao">Cadastrar</Link>
          </Button>
          <Button onClick={openMenu} type="button">
            <Link href="/usuario">Login</Link>
          </Button>
        </WrapperButton>
      </Menu>
      <Link href="/">
        <Logo>
          <img src="/images/logo2.png" alt="" />
          <p>Oluchi</p>
        </Logo>
      </Link>
    </Container>
  );
}
