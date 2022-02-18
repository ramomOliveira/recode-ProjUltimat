import Head from 'next/head';
import Layout from '../../components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>Oluchi - Quem Somos</title>
      </Head>
      <div>
        <h1>Quem Somos</h1>
      </div>
    </>
  );
}
About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
