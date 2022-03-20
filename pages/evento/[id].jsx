import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import apiProd from '../../lib/apiProd';

export default function Event() {
  const router = useRouter();
  const [event, setEvent] = useState({})

  useEffect(() => {
    apiProd.get(`/event/${router.query.id}`).then((response) => {
      setEvent(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [router])
  return (
    <>
      <Head>
        <title>Oluchi - Artistas</title>
      </Head>
      <div>
        <h1>Ola mundo</h1>
      </div>
    </>
  )
}

Event.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
