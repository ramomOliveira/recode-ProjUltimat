import Switch from 'react-switch';
import Link from 'next/link';
import Button from '../../Button';
import { useContext } from 'react';
import { IconHome, IconConfig, IconEvents, IconLogout } from '../../Icons'
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import AppContext from '../../../context/App';

import { Container, Logo, WrapperNavigation, WrapperLogout } from './style';
import { IconLogo } from '../../Icons/logo';

export default function LateralMenu() {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(AppContext);
  return (
    <Container>
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
      <Logo>
        {IconLogo}
      </Logo>

      <WrapperNavigation>
        <ul>

          <Link href="/usuario">
            <a href="/usuario">
              <li>
                {IconHome}
                Início
              </li>
            </a>
          </Link>
          <Link href="/usuario/agenda">
            <a href="/usuario/agenda">
              <li>
                {IconEvents}
                Agenda
              </li>
            </a>
          </Link>
          <Link href="/usuario/perfil">
            <a href="/usuario/perfil">
              <li>
                {IconConfig}
                Perfil
              </li>
            </a>
          </Link>


        </ul>
        <WrapperLogout>
          <Link href="/">

            <Button deleteMode>
              {IconLogout}
              Sair
            </Button>

          </Link>
        </WrapperLogout>
      </WrapperNavigation>
    </Container>
  );
}
