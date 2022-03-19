import { useContext } from 'react';
import Link from 'next/link';
import AuthContext from '../../../context/AuthContext';
import Button from '../../Button';

import { Container, ImgAvatar } from './style';

export default function AvatarUser() {
  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <Link href="/usuario/perfil">
      <a href="/usuario/perfil">
        <Container>
          <ImgAvatar imgAvatar={user?.photoURL ?? '/images/avatar.png'} />

          <Button link noPadding underline>Perfil</Button>
        </Container>
      </a>
    </Link>
  )
}