import Head from 'next/head';
import { useState, useEffect } from 'react';
import CardEvents from '../../components/Calender/CardEvents';
import Layout from '../../components/Layout';
import { Container } from '../../styles/calendar/style';
import apiProd from '../../lib/apiProd';

export default function Calendar() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    apiProd.get("/event").then((response) => {
      setEvents(response.data)
    })
  }, [])
  return (
    <>
      <Head>
        <title>Oluchi - Agenda</title>
      </Head>
      <Container className="margins">
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

      </Container>
    </>
  );
}

Calendar.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
