import Head from 'next/head';
import Layout from '../../components/Layout';

export default function News() {
  return (
    <>
      <Head>
        <title>Oluchi - Noticias</title>
      </Head>
      <div>
        <h1>Noticias</h1>
      </div>
    </>
  );
}
News.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
