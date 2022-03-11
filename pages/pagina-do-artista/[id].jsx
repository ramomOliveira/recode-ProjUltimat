import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import apiProd from '../../lib/apiProd';

import { Container, TitleH2, WrapperHeader, ImgArtist, TextP } from '../../styles/artist-page/style';

export default function PageArtist() {
  const [artist, setArtist] = useState({})

  useEffect(() => {
    apiProd.get(`/artistPage/999`).then((response) => {
      setArtist(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Oluchi - Artistas</title>
      </Head>
      <Container className="margins">

        <div>
          <WrapperHeader>
            <h1>Ramom Oliveira</h1>
            <div>

              <ImgArtist image="/images/img-page-artist.jpeg" />
              <h1>Cantor</h1>
            </div>
          </WrapperHeader>

          <div>
            <TitleH2>Um pouco sobre Ramom:</TitleH2>
            <TextP>
              Aquele que executa o canto ou, simplesmente, canta, é chamado de cantor (ou cantora). O cantor que está à frente de uma banda de música popular é, comumente, chamado de vocalista. Os cantores apresentam músicas, que podem ser cantadas com acompanhamento de instrumentos musicais ou a cappella.
            </TextP>
          </div>
          <div>
            <TitleH2>Cidade</TitleH2>
            <TextP>Alfredo Vasconcelos</TextP>
          </div>
          <div>
            <TitleH2>Estado</TitleH2>
            <TextP>MG</TextP>
          </div>
          <div>
            <TitleH2>Email:</TitleH2>
            <TextP>teste@teste.com</TextP>
          </div>
          <div>
            <TitleH2>Telefone para contato:</TitleH2>
            <TextP>(32) 9999-9999</TextP>
          </div>

        </div>

        {/* <div>
          <div>
            <h1>Nome:</h1>
            <p>{artist.name}</p>
          </div>
          <div>
            <h1>Profissão:</h1>
            <p>{artist.profession}</p>
          </div>
          <div>
            <h1>Um pouco sobre João:</h1>
            <p>{artist.description}</p>
          </div>
          <div>
            <h1>Cidade</h1>
            <p>{artist.city}</p>
          </div>
          <div>
            <h1>Estado</h1>
            <p>{artist.stateUf}</p>
          </div>
          <div>
            <h1>Email:</h1>
            <p>{artist.email}</p>
          </div>
          <div>
            <h1>Telefone para contato:</h1>
            <p>{artist.tel}</p>
          </div>

        </div> */}
      </Container>
    </>
  );
};

PageArtist.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
