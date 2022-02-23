import LateralMenu from '../LateralMenu';
import Title from '../Title';
import Content from '../Content';

import { Container, Wrapper } from './style';

export default function LayoutUser({ title, subTitle, children }) {
  return (
    <Container>
      <LateralMenu />
      <Wrapper>
        <Title title={title} subTitle={subTitle} />
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
}
