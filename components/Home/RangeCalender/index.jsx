import Button from '../../Button';

import { Container, Wrapper } from './style';

export default function RangeCalender() {
  return (
    <Container className="margins">
      <Wrapper>
        <h1>Agenda</h1>
        <Button link>Veja mais +</Button>
      </Wrapper>

      <div>
        <div>cards</div>
      </div>
    </Container>
  );
}
