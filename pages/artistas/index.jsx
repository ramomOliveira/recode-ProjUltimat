import Head from 'next/head';
import { useEffect, useState } from 'react';
import CardArtist from '../../components/CardArtist';
import IconLoad from '../../components/IconLoad';
import Layout from '../../components/Layout';
import apiProd from '../../lib/apiProd';

import { Title, WrapperCards, WrapperLoad } from '../../styles/artist/style';

export default function Artist() {
  const [gifLoad, setGifLoad] = useState(true);
  const [artists, setArtists] = useState([])

  useEffect(() => {
    apiProd.get('/artist').then((response) => {
      setArtists(response.data)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setGifLoad(false)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Oluchi - Artistas</title>
      </Head>
      <div className="margins">

        <Title>Nossos Artistas</Title>

        {gifLoad && (
          <IconLoad />
        )}

        <WrapperCards>
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
              href={`/pagina-do-artista/${item.id}`}
              hrefA={`/pagina-do-artista/${item.id}`}
            />
          ))}
        </WrapperCards>

      </div>
    </>
  );
}
Artist.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
