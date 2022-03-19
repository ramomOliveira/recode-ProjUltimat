import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { IconLogout } from '../../Icons'
import Button from '../../Button';
import { styles, Container, WrapperLogout, Logo, Wrapper } from './style'
import AuthContext from '../../../context/AuthContext';
import { ThemeContext } from 'styled-components';
import AppContext from '../../../context/App';
import { shade } from 'polished';
import Switch from 'react-switch';

export default function MenuBurgerUser() {
  const { logout } = useContext(AuthContext);
  const [menu, setMenu] = useState();
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(AppContext);

  const openMenu = () => {
    setMenu(false)
  }
  return (
    <Container className="margins">
      <Menu styles={styles} isOpen={menu}>
        <a onClick={openMenu} href="/usuario" >
          <span class="material-icons-outlined">
            home
          </span>
          <Link href="/usuario">

            Inicio
          </Link>
        </a>

        <a onClick={openMenu} href="/usuario/agenda">
          <span class="material-icons-outlined">
            event_note
          </span>
          <Link href="/usuario/agenda">Agenda</Link>
        </a>

        <a onClick={openMenu} href="/usuario/perfil">
          <span class="material-icons-outlined">
            manage_accounts
          </span>
          <Link href="/usuario/perfil">Perfil da Pagina</Link>
        </a>

        <WrapperLogout>
          <Link href="/">

            <Button onClick={logout} deleteMode>
              {IconLogout}
              Sair
            </Button>

          </Link>
        </WrapperLogout>
      </Menu>
      <Wrapper>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={15}
          offColor={shade(0.50, colors.primary)}
          onColor={colors.segundary}
        />
        <Link href="/">
          <Logo>
            <img src="/images/logo2.png" alt="" />
            <p>Oluchi</p>
          </Logo>
        </Link>
      </Wrapper>
    </Container>
  );
}
