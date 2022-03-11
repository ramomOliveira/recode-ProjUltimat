import Image from 'next/image'
import gifLoad from '../../public/images/gif-Load.gif';

import { WrapperLoading } from './style.Strength';


export default function AuthenticationStrength({ children }) {
  function renderContent() {
    return (
      <>
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

}