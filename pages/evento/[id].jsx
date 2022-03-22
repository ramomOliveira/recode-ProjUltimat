import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import apiProd from '../../lib/apiProd';
import IconLoad from '../../components/IconLoad';

import { Container, TitleH2, WrapperHeader, ImgArtist, TextP, WrapperContact, IconTel, IconEmail, WrapperAddress } from '../../styles/event/style';

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
            <h1>{event.name}</h1>
            <div>

              <ImgArtist image='/images/imgEvent.png' />
              <h1>{event.nameArtist}</h1>
            </div>
          </WrapperHeader>

          <div>
            <TitleH2>Descrição sobre o evento</TitleH2>
            <TextP>
              {event.description}
            </TextP>
          </div>
          <div>
            <h1>Informações do Evento</h1>
            <div>
              <TitleH2>Data</TitleH2>
              <TextP>
                {event.dateEvent}
              </TextP>
            </div>
            <div>
              <TitleH2>Horário</TitleH2>
              <TextP>
                {event.hourEvent}
              </TextP>
            </div>
            <div>
              <TitleH2>Valor</TitleH2>
              <TextP>
                {event.prece}
              </TextP>
            </div>
          </div>
          <WrapperAddress>
            <h1>Local do Evento</h1>
            <div>
              <TitleH2>Cidade</TitleH2>
              <TextP>{event.city}</TextP>
            </div>
            <div>
              <TitleH2>Bairro</TitleH2>
              <TextP>{event.district}</TextP>
            </div>
            <div>
              <TitleH2>Rua</TitleH2>
              <TextP>{event.address}</TextP>
            </div>
            <div>
              <TitleH2>Numero</TitleH2>
              <TextP>{event.number}</TextP>
            </div>
            <div>
              <TitleH2>Estado</TitleH2>
              <TextP>{event.stateUf}</TextP>
            </div>
          </WrapperAddress>
          <div>
            <TitleH2>Email</TitleH2>
            <WrapperContact>
              <IconEmail>

              </IconEmail>
              <TextP>{event.email}</TextP>
            </WrapperContact>
          </div>
          <div>
            <TitleH2>Telefone para contato:</TitleH2>
            <WrapperContact>
              <a href={`https://wa.me/55${event.tel}?text=Olá!`} target="_blank">
                <IconTel>
                </IconTel>
                <TextP>{event.tel}</TextP>
              </a>
            </WrapperContact>
          </div>

        </Container>
      </div>
    </>
  )
}

Event.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
