import Head from 'next/head';
import CardHome from '../../components/User/CardHome';
import LayoutUser from '../../components/User/LayoutUser';
import { Container } from '../../styles/user/style';

export default function User() {
  return (
    <>
      <Head>
        <title>Oluchi - Painel Admin</title>
      </Head>
      <LayoutUser title="Olá, João!" subTitle="Seus Eventos">
        <Container>
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
        </Container>
      </LayoutUser>
    </>
  );
}

// User.getLayout = function getLayout(page) {
//   return <LayoutUser>{page}</LayoutUser>;
// };
