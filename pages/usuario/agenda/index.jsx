import Head from 'next/head';
import apiProd from '../../../lib/apiProd';
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import LayoutUser from '../../../components/User/LayoutUser'
import HeaderCalender from '../../../components/User/PageCalender/HeaderCalender';
import IconLoad from '../../../components/IconLoad';
import AppContext from '../../../context/App';

import { WrapperListEvents, WrapperHeader, WrapperMain, WrapperButton, DivNone } from '../../../styles/user/calender/style';

export default function Calender() {
  const { showModalSuccess } = useContext(AppContext);
  const [gifLoad, setGifLoad] = useState(true);
  const router = useRouter();
  const [listEvents, setListEvents] = useState([])

  const load = () => {
    apiProd.get('/event/user').then((response) => {
      setListEvents(response.data)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setGifLoad(false)
    })
  }
  useEffect(() => {
    load()
  }, [])

  const deleteEvent = (id) => {
    apiProd.delete(`/event/${id}`).then(() => {
      load()
      showModalSuccess("Evento Excluído com Sucesso!")
    })
  };


  return (
    <>
      <Head>
        <title>Oluchi - Painel Agenda</title>
      </Head>
      <LayoutUser title="Minha Agenda" subTitle="Adicione, edite ou exclua seus eventos">
        <HeaderCalender />

        <WrapperListEvents>

          <WrapperHeader>
            <div>Evento</div>
            <DivNone>Local</DivNone>
            <DivNone>Data</DivNone>
            <div />
          </WrapperHeader>
          {gifLoad && (
            <IconLoad />
          )}
          {listEvents?.map((item) => (
            <WrapperMain key={item.id}>
              <div>{item.name}</div>
              <DivNone>{item.address}, {item.city} - {item.stateUf}</DivNone>
              <DivNone>{item.dateEvent}</DivNone>

              <WrapperButton>
                <Button onClick={() => deleteEvent(item.id)} noPadding link>
                  <span class="material-icons-outlined">
                    delete
                  </span>
                </Button>
                <Link href={`/usuario/editar-evento/${item.id}`}>
                  <Button noPadding link>
                    <span class="material-icons-outlined">
                      edit
                    </span>
                  </Button>
                </Link>
              </WrapperButton>
            </WrapperMain>
          ))}

        </WrapperListEvents>
      </LayoutUser>
    </>
  )
}