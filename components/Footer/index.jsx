import { IconFacebook, IconInstagram, IconWhatZap } from '../Icons';

import { Container, Info, IconsSocial } from './style';

export default function Footer() {
  return (
    <Container>
      <Info>
        <h1>© todos direitos reservados - Oluchi recodepro</h1>
      </Info>
      <IconsSocial>
        {IconFacebook} {IconWhatZap} {IconInstagram}
      </IconsSocial>
    </Container>
  );
}
