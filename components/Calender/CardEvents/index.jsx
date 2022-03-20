import Link from 'next/link';

import { Container, WrapperTop, WrapperInfo, ImgArtist, Name, Profession, City, Email, Tel } from './style';

export default function CardEvents({ name, profession, city, stateUf, email, tel, href, hrefA }) {
  return (
    <Link href={href}>
      <a href={hrefA}>
        <Container>
          <WrapperTop>
            <ImgArtist image="/images/img-page-artist.jpeg" />
          </WrapperTop>
          <WrapperInfo>
            <Name>
              <h1>Nome:</h1>
              <p>{name}</p>
            </Name>
            <Profession>
              <h1>Profissão:</h1>
              <p>{profession}</p>
            </Profession>
            <City>
              <h1>Cidade</h1>
              <p>{city} / {stateUf}</p>
            </City>
            <Email>
              <h1>Email:</h1>
              <p>{email}</p>
            </Email>
            <Tel>
              <h1>Telefone para contato:</h1>
              <p>{tel}</p>
            </Tel>
          </WrapperInfo>
        </Container>
      </a>
    </Link>
  )
}