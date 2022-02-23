import Head from 'next/head';
import Button from '../../../components/Button';
import LayoutUser from '../../../components/User/LayoutUser'
import HeaderCalender from '../../../components/User/PageCalender/HeaderCalender';

import { WrapperListEvents, WrapperHeader, WrapperMain, WrapperButton, DivNone } from '../../../styles/user/calender/style';

export default function Calender() {
  return (
    <>
      <Head>
        <title>Oluchi - Painel Agenda</title>
      </Head>
      <LayoutUser title="Minha Agenda" subTitle="Adicione, edite ou exclua seus eventos">
        <HeaderCalender />

        <WrapperListEvents>

          <WrapperHeader>
            <div>Evento</div>
            <DivNone>Local</DivNone>
            <DivNone>Data</DivNone>
            <div />
          </WrapperHeader>

          <WrapperMain>
            <div>Casa mais Arte</div>
            <DivNone>Vila Nova, Caxias-BH</DivNone>
            <DivNone>22/07/2022</DivNone>

            <WrapperButton>
              <Button noPadding link>
                <span class="material-icons-outlined">
                  delete
                </span>
              </Button>
              <Button noPadding link>
                <span class="material-icons-outlined">
                  edit
                </span>
              </Button>
            </WrapperButton>
          </WrapperMain>
        </WrapperListEvents>
      </LayoutUser>
    </>
  )
}