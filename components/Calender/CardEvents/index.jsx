import Link from 'next/link';

import { Container, WrapperTop, WrapperInfo, ImgArtist, Name, City, Tel } from './style';

export default function CardEvents({ name, city, stateUf, tel, href, hrefA }) {
  return (
    <Link href={href}>
      <a href={hrefA}>
        <Container>
          <WrapperTop>
            <ImgArtist image="/images/img-page-artist.jpeg" />
          </WrapperTop>
          <WrapperInfo>
            <Name>
              <h1>{name}</h1>

            </Name>

            <City>
              <h1>Local</h1>
              <p>{city} / {stateUf}</p>
            </City>

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