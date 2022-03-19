import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import gifLoad from '../../public/images/gif-Load.gif';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

import { WrapperLoading } from './style.Strength';


export default function AuthenticationStrength({ children }) {
  const { user, carregando } = useContext(AuthContext)

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if(!document.cookie?.includes("admin-template-cod3r-auth")){
                  window.location.href = "/autenticacao"
              }
          `
            }}
          />
        </Head>
        {children}
      </>
    )
  }

  function renderLoading() {
    return (
      <WrapperLoading>
        <Image src={gifLoad} />
      </WrapperLoading>
    )
  }

  if (!carregando && user?.email) {
    return renderContent()
  } else if (carregando) {
    return renderLoading()
  } else {
    router.push("/autenticacao")
    return null
  }

}