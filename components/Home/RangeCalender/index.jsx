import Button from '../../Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CardCalender from '../CardCalender';
import apiProd from '../../../lib/apiProd';
import IconLoad from '../../../components/IconLoad';

import { Container, Wrapper, WrapperCards } from './style';

const arrayImage = [
  '/images/home/img-calender1.jpeg',
  '/images/home/img-calender2.jpeg',
  '/images/home/img-calender3.jpeg',
];

export default function RangeCalender() {
  const [gifLoad, setGifLoad] = useState(true);
  const [listEvents, setListEvents] = useState([])

  const load = () => {
    apiProd.get('/event').then((response) => {
      setListEvents(response.data)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setGifLoad(false)
    })
  }
  useEffect(() => {
    load()
  }, [])
  return (
    <Container className="margins">
      <Wrapper>
        <h1>Agenda</h1>
        <Link href="/agenda">
          <a href="/agenda">
            <Button link>Veja mais +</Button>
          </a>
        </Link>
      </Wrapper>

      <WrapperCards>
        {gifLoad && (
          <IconLoad />
        )}
        {listEvents.map((item) => (
          <CardCalender
            key={item.id}
            imageUrl='/images/home/img-calender3.jpeg'
            href={`/evento/${item.id}`}
            hrefA={`/evento/${item.id}`}
            name={item.name}
            address={item.address}
            city={item.city}
            dateEvent={item.dateEvent}
            hourEvent={item.hourEvent}
          />
        ))}
      </WrapperCards>
    </Container>
  );
}
