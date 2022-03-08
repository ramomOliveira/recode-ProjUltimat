import { useState, useContext } from 'react';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { IconGoogle, IconWarning } from '../../components/Icons';
import AuthInput from "../../components/Authentication/AuthInput";
import AuthContext from '../../context/AuthContext';

import { Container, Title, WrapperButton, Range, LoginOrRegister, WrapperWarning } from '../../styles/authentication/style';

export default function Authentication() {
  const { loginGoogle } = useContext(AuthContext);

  const [warning, setWarning] = useState('')
  const [modo, setModo] = useState('login');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const viewWarning = (msg, time = 5) => {
    setWarning(msg)
    setTimeout(() => setWarning(null), time * 1000)
  }

  const submitLogin = () => {
    if (modo === 'login') {
      console.log("login")
      viewWarning('Ocorreu um erro no login')
    } else {
      console.log("register")
      viewWarning('Ocorreu um erro no cadastro')
    }
  }
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
          <Button onClick={submitLogin}>
            {modo === 'login' ? 'Entrar' : 'Cadastrar'}
          </Button>
        </WrapperButton>

        <Range />

        <WrapperButton>
          <Button onClick={loginGoogle}>
            {IconGoogle}
            Entrar com Google
          </Button>
        </WrapperButton>

        {modo === 'login' ? (
          <LoginOrRegister>
            Novo por aqui?
            <Button link underline onClick={() => setModo('register')}>
              Crie uma Conta Gratuitamente
            </Button>
          </LoginOrRegister>
        ) : (
          <LoginOrRegister>
            Já faz parte da nossa comunidade?
            <Button link underline onClick={() => setModo('login')}>
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