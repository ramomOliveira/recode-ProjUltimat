import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import apiProd from '../../lib/apiProd';

import { Container, TitleH2, WrapperHeader, ImgArtist, TextP, WrapperContact, IconTel, IconEmail, WrapperAddress } from '../../styles/artist-page/style';

export default function PageArtist() {
  const router = useRouter();
  const [artist, setArtist] = useState({})

  useEffect(() => {
    apiProd.get(`/artist/${router.query.id}`).then((response) => {
      setArtist(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [router])

  return (
    <>
      <Head>
        <title>Oluchi - Artistas</title>
      </Head>
      <Container className="margins">

        <div>
          <WrapperHeader>
            <h1>{artist.name}</h1>
            <div>

              <ImgArtist image="/images/img-page-artist.jpeg" />
              <h1>{artist.profession}</h1>
            </div>
          </WrapperHeader>

          <div>
            <TitleH2>Um pouco sobre {artist.name}</TitleH2>
            <TextP>
              {artist.description}
            </TextP>
          </div>
          <WrapperAddress>
            <div>
              <TitleH2>Cidade</TitleH2>
              <TextP>{artist.city}</TextP>
            </div>
            <div>
              <TitleH2>Estado</TitleH2>
              <TextP>{artist.stateUf}</TextP>
            </div>
          </WrapperAddress>
          <div>
            <TitleH2>Email</TitleH2>
            <WrapperContact>
              <IconEmail>

              </IconEmail>
              <TextP>{artist.email}</TextP>
            </WrapperContact>
          </div>
          <div>
            <TitleH2>Telefone para contato:</TitleH2>
            <WrapperContact>
              <a href={`https://wa.me/55${artist.tel}?text=Olá!`} target="_blank">
                <IconTel>
                </IconTel>
                <TextP>{artist.tel}</TextP>
              </a>
            </WrapperContact>
          </div>

        </div>

      </Container>
    </>
  );
};

PageArtist.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
