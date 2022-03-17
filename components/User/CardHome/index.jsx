import Button from '../../Button';
import Link from 'next/link';
import { Container, HeaderCard, TitleH1, Wrapper } from './style';

export default function CardHome({ name, address, city, stateUf, dateEvent, hourEvent, href, hrefA }) {
  return (
    <Container>
      <HeaderCard>
        <TitleH1>{name}</TitleH1>
        <Link href={href}>
          <a href={hrefA}>
            <Button link>
              <span class="material-icons-outlined">
                edit
              </span>
            </Button>
          </a>
        </Link>
      </HeaderCard>
      <Wrapper>
        <h2>Local:</h2>
        <p>{address} - {city}/{stateUf}</p>
      </Wrapper>
      <Wrapper>
        <h2>Data e horário</h2>
        <p>{dateEvent} as {hourEvent}</p>
      </Wrapper>
    </Container>
  )
}