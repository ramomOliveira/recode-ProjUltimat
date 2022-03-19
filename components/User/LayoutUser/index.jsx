import LateralMenu from '../LateralMenu';
import Title from '../Title';
import Content from '../Content';
import AuthenticationStrength from '../../Authentication/AuthenticationStrength';

import { Container, Wrapper } from './style';
import MenuBurgerUser from '../MenuBurgerUser';

export default function LayoutUser({ title, subTitle, children }) {
  return (
    <AuthenticationStrength>
      <Container>
        <MenuBurgerUser />
        <LateralMenu />

        <Wrapper>
          <Title title={title} subTitle={subTitle} />
          <Content>{children}</Content>
        </Wrapper>
      </Container>
    </AuthenticationStrength>
  );
}
