import Head from 'next/head';
import LayoutUser from '../../components/User/LayoutUser';

export default function User() {
  return (
    <>
      <Head>
        <title>Oluchi - Painel Admin</title>
      </Head>
      <LayoutUser title="Olá, João!" subTitle="Estamos contruindo">
        <h3>Conteudo</h3>
      </LayoutUser>
    </>
  );
}

// User.getLayout = function getLayout(page) {
//   return <LayoutUser>{page}</LayoutUser>;
// };
