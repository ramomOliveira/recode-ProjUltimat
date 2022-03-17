import Head from 'next/head';
import Layout from '../../components/Layout';
import CardNews from '../../components/News/CardNews';

import { Container } from '../../styles/news/style';

const arrayNews = [
  {
    title: 'Mulher não é tudo igual: a interseccionalidade no debate de gênero',
    subject: 'carreira',
    readingTime: '4 min de leitura',
    imgUrl: '/images/news/news1.webp',
    href: "https://exame.com/carreira/mulher-nao-e-tudo-igual-a-interseccionalidade-no-debate-de-genero/",
  },
  {
    title: 'Biden nomeia primeira ministra negra da Suprema Corte dos EUA',
    subject: 'mundo',
    readingTime: '2 min de leitura',
    imgUrl: '/images/news/news2.webp',
    href: "https://exame.com/mundo/biden-nomeia-primeira-ministra-negra-da-suprema-corte-dos-eua/",
  },
  {
    title: 'O que o Brasil tem a ganhar com o letramento racial?',
    subject: 'um conteúdo bússola',
    readingTime: '4 min de leitura',
    imgUrl: '/images/news/news3.webp',
    href: "https://exame.com/bussola/o-que-o-brasil-tem-a-ganhar-com-o-letramento-racial/",
  },
  {
    title: 'Diversidade: Unilever realiza projeto para inclusão racial em áreas de TI',
    subject: 'um conteúdo bússola',
    readingTime: '3 min de leitura',
    imgUrl: '/images/news/news4.webp',
    href: "https://exame.com/bussola/diversidade-unilever-realiza-projeto-para-inclusao-racial-em-areas-de-ti/",
  },
  {
    title: 'Sidney Poitier, primeiro negro a vencer um Oscar, morre aos 94 anos',
    subject: 'casual',
    readingTime: '2 min de leitura',
    imgUrl: '/images/news/news5.webp',
    href: "https://exame.com/casual/sidney-poitier-primeiro-negro-a-vencer-um-oscar-morre-aos-94-anos/",
  },
  {
    title: 'Quer estudar na Estácio de graça? Empodera dá 10 bolsas integrais',
    subject: 'um conteúdo bússola',
    readingTime: '2 min de leitura',
    imgUrl: '/images/news/news6.webp',
    href: "https://exame.com/bussola/quer-estudar-na-estacio-de-graca-empodera-da-10-bolsas-integrais/",
  },
  {
    title: 'Quando a cultura e o posicionamento antirracista se unem',
    subject: 'um conteúdo bússola',
    readingTime: '3 min de leitura',
    imgUrl: '/images/news/news7.webp',
    href: "https://exame.com/bussola/quando-a-cultura-e-o-posicionamento-antirracista-se-unem/",
  },
  {
    title: 'DP6 abre vagas para programa “Talentos Negros” com salário de R$ 2.500',
    subject: 'um conteúdo bússola',
    readingTime: '2 min de leitura',
    imgUrl: '/images/news/news8.webp',
    href: "https://exame.com/bussola/dp6-abre-vagas-para-programa-talentos-negros-com-salario-de-r-2-500/",
  },
  {
    title: 'Mulheres de negócios: a potência da herança ancestral',
    subject: 'um conteúdo bússola',
    readingTime: '6 min de leitura',
    imgUrl: '/images/news/news9.webp',
    href: "https://exame.com/bussola/mulheres-de-negocios-a-potencia-da-heranca-ancestral/",
  },
  {
    title: 'Vozes: O que é construir a autoestima de uma mulher negra',
    subject: 'um conteúdo bússola',
    readingTime: '6 min de leitura',
    imgUrl: '/images/news/news10.webp',
    href: "https://exame.com/bussola/vozes-o-que-e-construir-a-autoestima-de-uma-mulher-negra/",
  }


]

export default function News() {
  return (
    <>
      <Head>
        <title>Oluchi - Noticias</title>
      </Head>
      <Container className="margins">
        <h1>Últimas notícias</h1>
        {arrayNews.map((item) => (
          <CardNews
            key={item.href}
            title={item.title}
            subject={item.subject}
            readingTime={item.readingTime}
            imgUrl={item.imgUrl}
            href={item.href}
          />
        ))}

      </Container>
    </>
  );
}
News.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
