import Head from 'next/head';
import { useState, useEffect } from 'react';
import CardEvents from '../../components/Calender/CardEvents';
import Layout from '../../components/Layout';
import { Container, WrapperEvents } from '../../styles/calendar/style';
import apiProd from '../../lib/apiProd';
import IconLoad from '../../components/IconLoad';

export default function Calendar() {
  const [gifLoad, setGifLoad] = useState(true);
  const [events, setEvents] = useState([])

  useEffect(() => {
    apiProd.get("/event").then((response) => {
      setEvents(response.data)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setGifLoad(false)
    })
  }, [])
  return (
    <>
      <Head>
        <title>Oluchi - Agenda</title>
      </Head>
      <Container className="margins">
        <h1>Eventos</h1>
        {gifLoad && (
          <IconLoad />
        )}
        <WrapperEvents>
          {events.map((item) => (
            <CardEvents
              key={item.id}
              href={`/evento/${item.id}`}
              hrefA={`/evento/${item.id}`}
              name={item.name}
              city={item.city}
              stateUf={item.stateUf}
              tel={item.tel}
            />
          ))}
        </WrapperEvents>

      </Container>
    </>
  );
}

Calendar.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
