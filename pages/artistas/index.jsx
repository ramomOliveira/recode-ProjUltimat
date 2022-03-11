import Head from 'next/head';
import { useEffect, useState } from 'react';
import CardArtist from '../../components/CardArtist';
import Layout from '../../components/Layout';
import apiProd from '../../lib/apiProd';

import { Title } from '../../styles/artist/style';

export default function Artist() {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    apiProd.get('/artist').then((response) => {
      setArtists(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Oluchi - Artistas</title>
      </Head>
      <div className="margins">

        <Title>Nossos Artistas</Title>

        {artists?.map((item) => (
          <CardArtist
            key={item.id}
            name={item.name}
            profession={item.profession}
            description={item.description}
            city={item.city}
            stateUf={item.stateUf}
            email={item.email}
            tel={item.tel}
          />
        ))}


      </div>
    </>
  );
}
Artist.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
