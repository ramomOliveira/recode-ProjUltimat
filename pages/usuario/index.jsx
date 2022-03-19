import Head from 'next/head';
import { useEffect, useState, useContext } from 'react';
import CardHome from '../../components/User/CardHome';
import LayoutUser from '../../components/User/LayoutUser';
import { Container } from '../../styles/user/style';
import apiProd from '../../lib/apiProd';
import IconLoad from '../../components/IconLoad';
import AuthContext from '../../context/AuthContext';

export default function User() {
  const [gifLoad, setGifLoad] = useState(true);
  const [eventsCalender, setEventsCalender] = useState([]);
  const { user } = useContext(AuthContext)

  useEffect(() => {
    apiProd.get('/event/user').then((response) => {
      setEventsCalender(response.data)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setGifLoad(false)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Oluchi - Painel Admin</title>
      </Head>
      <LayoutUser title={`Olá, ${user?.displayName}`} subTitle="Seus Eventos">
        {gifLoad && (
          <IconLoad />
        )}
        <Container>

          {eventsCalender.map((item) => (
            <CardHome
              key={item.id}
              name={item.name}
              address={item.address}
              city={item.city}
              stateUf={item.stateUf}
              dateEvent={item.dateEvent}
              hourEvent={item.hourEvent}
              href={`/usuario/editar-evento/${item.id}`}
              hrefA={`/usuario/editar-evento/${item.id}`}
            />

          ))}

        </Container>
      </LayoutUser>
    </>
  );
}

// User.getLayout = function getLayout(page) {
//   return <LayoutUser>{page}</LayoutUser>;
// };
