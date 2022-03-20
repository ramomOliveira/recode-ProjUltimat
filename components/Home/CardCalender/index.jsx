import { Container } from './style';
import Link from 'next/link';

export default function CardCalender({ href, hrefA, imageUrl, name, address, city, dateEvent, hourEvent }) {
  return (
    <Link href={href}>
      <a href={hrefA}>
        <Container image={imageUrl}>
          <h1>{name}</h1>
          <p>{address} - {city}</p>
          <h2>{dateEvent} ás {hourEvent}</h2>
        </Container>
      </a>
    </Link>
  );
}
