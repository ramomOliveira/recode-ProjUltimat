import Head from 'next/head';
import { useContext } from 'react';
import CardContact from '../components/CardContact';
import CardNews from '../components/Home/CardNews';
import RangeAbout from '../components/Home/RangeAbout';
import RangeCalender from '../components/Home/RangeCalender';
import Layout from '../components/Layout';
import AppContext from '../context/App';


import { Container } from '../styles/index/style';

export default function Home() {
  const { modal, viewModal } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Projeto - Oluchi</title>
      </Head>
      <Container>
        <CardNews />
        <RangeAbout />
        <RangeCalender />
        <CardContact />
      </Container>


    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
