import Head from 'next/head';
import LayoutUser from '../../../components/User/LayoutUser'

export default function Calender() {
  return (
    <>
      <Head>
        <title>Oluchi - Painel Agenda</title>
      </Head>
      <LayoutUser title="Minha Agenda" subTitle="Adicione, edite ou exclua seus eventos">
        <h3>Conteudo</h3>
      </LayoutUser>
    </>
  )
}