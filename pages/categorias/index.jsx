import Head from 'next/head';
import Layout from '../../components/Layout';

export default function Categories() {
  return (
    <>
      <Head>
        <title>Oluchi - Categorias</title>
      </Head>
      <div>
        <h1>Categorias</h1>
      </div>
    </>
  );
}
Categories.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
