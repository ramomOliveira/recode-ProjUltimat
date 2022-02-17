import Head from 'next/head';
import Layout from '../components/Layout';

import { Container } from '../styles/index/style';

export default function Home() {
  return (
    <>
      <Head>
        <title>Projeto - Oluchi</title>
      </Head>
      <Container>
        <h1>Olá, mundo!</h1>
      </Container>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
