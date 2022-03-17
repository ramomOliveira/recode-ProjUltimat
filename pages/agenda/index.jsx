import Head from 'next/head';
import Layout from '../../components/Layout';


export default function Calendar() {
  return (
    <>
      <Head>
        <title>Oluchi - Agenda</title>
      </Head>
      <div>
        agenda
      </div>
    </>
  );
}

Calendar.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
