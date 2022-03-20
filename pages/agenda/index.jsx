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
        <CardEvents
          href="/"
          hrefA="/"
        />
      </Container>
    </>
  );
}

Calendar.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
