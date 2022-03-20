import { slide as Menu } from 'react-burger-menu';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../Button';
import { styles, Container, WrapperButton, Logo } from './style';

export default function MenuBurger() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);


  const handleClick = (event) => {
    event.preventDefault();
    router.push(event.target.href)
    setMenu(false)
  }

  return (
    <Container className="margins">
      <Menu styles={styles} onStateChange={(state) => setMenu(state.isOpen)} isOpen={menu}>

        <a onClick={handleClick} href="/" >
          Inicio
        </a>

        <a onClick={handleClick} href="/noticias">
          Notícias
        </a>

        <a onClick={handleClick} href="/agenda">
          Agenda
        </a>

        <a onClick={handleClick} href="/quem-somos">
          Sobre
        </a>

        <a onClick={handleClick} href="/artistas">
          Artistas
        </a>

        <WrapperButton>
          <Button type="button">
            <Link href="/autenticacao/register">Cadastrar</Link>
          </Button>
          <Button type="button">
            <Link href="/autenticacao/login">Login</Link>
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
