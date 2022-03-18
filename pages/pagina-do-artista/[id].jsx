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
              <a href={`https://web.whatsapp.com/send?phone=${artist.tel}`} target="_blank">
                <IconTel>
                </IconTel>
                <TextP>{artist.tel}</TextP>
              </a>
            </WrapperContact>
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
