import Button from '../../Button';
import CardCalender from '../CardCalender';

import { Container, Wrapper, WrapperCards } from './style';

const arrayImage = [
  '/images/home/img-calender1.jpeg',
  '/images/home/img-calender2.jpeg',
  '/images/home/img-calender3.jpeg',
];

export default function RangeCalender() {
  return (
    <Container className="margins">
      <Wrapper>
        <h1>Agenda</h1>
        <Button link>Veja mais +</Button>
      </Wrapper>

      <WrapperCards>
        {arrayImage.map((image) => (
          <CardCalender imageUrl={image} />
        ))}
      </WrapperCards>
    </Container>
  );
}
