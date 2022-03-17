import Link from 'next/link';

import { Container, WrapperTop, WrapperInfo, ImgArtist } from './style';

export default function CardArtist({ name, profession, description, city, stateUf, email, tel }) {
  return (
    <Link href="/">
      <a href="/">
        <Container>
          <WrapperTop>
            <ImgArtist image="/images/img-page-artist.jpeg" />
          </WrapperTop>
          <WrapperInfo>
            <div>
              <h1>Nome:</h1>
              <p>{name}</p>
            </div>
            <div>
              <h1>Profissão:</h1>
              <p>{profession}</p>
            </div>
            <div>
              <h1>Cidade</h1>
              <p>{city} / {stateUf}</p>
            </div>
            <div>
              <h1>Email:</h1>
              <p>{email}</p>
            </div>
            <div>
              <h1>Telefone para contato:</h1>
              <p>{tel}</p>
            </div>
          </WrapperInfo>
        </Container>
      </a>
    </Link>
  )
}