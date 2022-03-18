import Head from 'next/head';
import OurTeam from '../../components/About/OurTeam';
import Layout from '../../components/Layout';
import { Container, WrapperInfo } from '../../styles/about/style';

export default function About() {
  return (
    <>
      <Head>
        <title>Oluchi - Quem Somos</title>
      </Head>
      <Container >

        <WrapperInfo className="margins">
          <div>
            <h1>Sobre</h1>
          </div>
          <div>
            <p>
              O Projeto Oluchi visa mapear, captar e difundir produções artísticas de pessoas negras no Rio de Janeiro. Inicialmente abrangemos apenas o âmbito regional, mas pretendemos futuramente ampliar essa divulgação para todo o Brasil.
            </p>
            <p>
              Oluchi é uma palavra da língua Igbo, uma das principais línguas da Nigéria e significa arte ou obra divina. Neste contexto, escolhemos esta palavra pois é a que melhor retrata e espelha nossa visão sobre
            </p>
            <p>
              Nossa iniciativa se dá pela ausência (ou quase) de artistas negros em mostras culturais e/ou apresentações individuais seja pela baixa procura ou pela falta de divulgação. Visando dar o holofote necessário para esses artistas, nasce o Projeto Oluchi para refletirmos sobre o sistema de arte brasileiro e evidenciar a visibilidade do protagonismo negro.
            </p>
          </div>
        </WrapperInfo>
        <OurTeam />
      </Container>
    </>
  );
}
About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
