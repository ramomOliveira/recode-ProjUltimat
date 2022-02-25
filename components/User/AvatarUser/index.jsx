import { useContext } from 'react';
import Link from 'next/link';
import AuthContext from '../../../context/AuthContext';
import Button from '../../Button';

import { Container, ImgAvatar } from './style';

export default function AvatarUser() {
  const { user } = useContext(AuthContext)

  return (
    <Link href="/">
      <a href="/">
        <Container>
          <ImgAvatar />

          <Button link noPadding underline>Perfil</Button>
        </Container>
      </a>
    </Link>
  )
}