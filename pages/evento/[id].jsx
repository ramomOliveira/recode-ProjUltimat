import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import apiProd from '../../lib/apiProd';
import IconLoad from '../../components/IconLoad';

import { Container, TitleH2, TitleH3, WrapperHeader, WrapperImg, WrapperMain, ImgEvent, TextP, WrapperContact, IconTel, IconEmail, WrapperAddress } from '../../styles/event/style';

export default function Event() {
  const [gifLoad, setGifLoad] = useState(true);
  const router = useRouter();
  const [event, setEvent] = useState({})

  useEffect(() => {
    apiProd.get(`/event/${router.query.id}`).then((response) => {
      setEvent(response.data)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setGifLoad(false)
    })
  }, [router])
  return (
    <>
      <Head>
        <title>Oluchi - Artistas</title>
      </Head>
      <div>
        {gifLoad && (
          <IconLoad />
        )}
        <Container className="margins">

          <WrapperHeader>
            <div>
              <h1>{event.name}</h1>

              <div>
                <TitleH2>Descrição sobre o evento</TitleH2>
                <TextP>
                  {event.description}
                </TextP>
              </div>

            </div>

            <WrapperImg>
              <ImgEvent image='/images/imgEvent.png' />
              <h1>Artista {event.nameArtist}</h1>
            </WrapperImg>

          </WrapperHeader>

          <WrapperMain>
            <TitleH2>Informações do Evento</TitleH2>
            <div>
              <div>
                <TitleH3>Data</TitleH3>
                <TextP>
                  {event.dateEvent}
                </TextP>
              </div>
              <div>
                <TitleH3>Horário</TitleH3>
                <TextP>
                  {event.hourEvent}
                </TextP>
              </div>
              <div>
                <TitleH3>Valor</TitleH3>
                <TextP>
                  {event.prece}
                </TextP>
              </div>
            </div>
          </WrapperMain>

          <WrapperAddress>
            <TitleH2>Local do Evento</TitleH2>
            <div>
              <div>
                <TitleH3>Cidade</TitleH3>
                <TextP>{event.city}</TextP>
              </div>
              <div>
                <TitleH3>Bairro</TitleH3>
                <TextP>{event.district}</TextP>
              </div>
              <div>
                <TitleH3>Rua</TitleH3>
                <TextP>{event.address}</TextP>
              </div>
              <div>
                <TitleH3>Numero</TitleH3>
                <TextP>{event.number}</TextP>
              </div>
              <div>
                <TitleH3>Estado</TitleH3>
                <TextP>{event.stateUf}</TextP>
              </div>
            </div>
          </WrapperAddress>

          <WrapperContact>
            <TitleH2>Email</TitleH2>
            <div>
              <IconEmail>

              </IconEmail>
              <TextP>{event.email}</TextP>
            </div>
          </WrapperContact>
          <WrapperContact>
            <TitleH2>Telefone para contato:</TitleH2>
            <div>
              <a href={`https://wa.me/55${event.tel}?text=Olá!`} target="_blank">
                <IconTel>
                </IconTel>
                <TextP>{event.tel}</TextP>
              </a>
            </div>
          </WrapperContact>

        </Container>
      </div>
    </>
  )
}

Event.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
