import { useState, useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { IconGoogle, IconWarning } from '../../components/Icons';
import AuthInput from "../../components/Authentication/AuthInput";
import AuthContext from '../../context/AuthContext';

import { Container, Title, WrapperButton, ButtonGoogle, Range, LoginOrRegister, WrapperWarning } from '../../styles/authentication/style';
import { useRouter } from 'next/router';

export default function Authentication() {
  const { cadastrar, login, loginGoogle } = useContext(AuthContext);
  const router = useRouter();
  const [warning, setWarning] = useState('')
  const [modo, setModo] = useState('login');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const viewWarning = (msg, time = 5) => {
    setWarning(msg)
    setTimeout(() => setWarning(null), time * 1000)
  }

  async function submitLogin() {
    try {
      if (modo === 'login') {
        await login(email, password)

      } else {
        await cadastrar(email, password)

      }
    } catch (e) {
      viewWarning(e?.message ?? 'Error desconhecido!')
    }

  }

  useEffect(() => {
    setModo(router.query.action)
  }, [router.query.action])
  return (

    <Container>
      <div>
        <Title>
          {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
        </Title>

        {warning ? (
          <WrapperWarning>
            <div>{IconWarning}</div>
            <span>{warning}</span>
          </WrapperWarning>
        ) : false}


        <AuthInput
          label="Email"
          type='email'
          valor={email}
          valueChanged={setEmail}
          property
        />

        <AuthInput
          label="Senha"
          type="password"
          valor={password}
          valueChanged={setPassword}
          property
        />

        <WrapperButton>
          <Button blackMode onClick={submitLogin}>
            {modo === 'login' ? 'Entrar' : 'Cadastrar'}
          </Button>
        </WrapperButton>

        <Range />

        <ButtonGoogle>
          <Button onClick={loginGoogle}>
            {IconGoogle}
            Entrar com Google
          </Button>
        </ButtonGoogle>

        {modo === 'login' ? (
          <LoginOrRegister>
            Novo por aqui?
            <Button link underline onClick={() => router.push('/autenticacao/register')}>
              Crie uma Conta Gratuitamente
            </Button>
          </LoginOrRegister>
        ) : (
          <LoginOrRegister>
            Já faz parte da nossa comunidade?
            <Button link underline onClick={() => router.push('/autenticacao/login')}>
              Entre com a suas Credenciais
            </Button>
          </LoginOrRegister>
        )}
      </div>
    </Container>
  )
}

Authentication.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};