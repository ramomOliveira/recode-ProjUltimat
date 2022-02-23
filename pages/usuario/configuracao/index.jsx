import Head from 'next/head';
import Button from '../../../components/Button';
import LayoutUser from '../../../components/User/LayoutUser'

import { WrapperForm, WrapperButton } from '../../../styles/user/configuration/style';

export default function Configuration() {
  return (
    <>
      <Head>
        <title>Oluchi - Painel Configuração</title>
      </Head>
      <LayoutUser title="Página Configuração" subTitle="Edite suas informações">

        <WrapperForm>
          <div>
            <h1>Informações gerais</h1>
            <div>
              <div>
                <h3>Nome:</h3>
                <input type="text" />
              </div>
              <div>
                <h3>Profissão:</h3>
                <input type="text" />
              </div>
            </div>
          </div>

          <div>
            <h1>Informações de contato</h1>
            <div>
              <div>
                <h3>Celular:</h3>
                <input type="text" />
              </div>
              <div>
                <h3>E-mail:</h3>
                <input type="text" />
              </div>
            </div>
          </div>

          <WrapperButton>
            <Button>Salvar Alterações</Button>
          </WrapperButton>
        </WrapperForm>
      </LayoutUser>
    </>
  )
}