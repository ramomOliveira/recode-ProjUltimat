import Head from 'next/head';

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
