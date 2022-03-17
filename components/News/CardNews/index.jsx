import { Container, AsideLeft, AsideRight } from './style';

export default function CardNews({ imgUrl, subject, readingTime, title, href }) {
  return (
    <Container>
      <AsideLeft img={imgUrl}>

      </AsideLeft>

      <AsideRight>
        <h2>{subject}</h2>
        <h3>{readingTime}</h3>
        <a href={href} target="_blank">
          <h1>{title}</h1>
        </a>
      </AsideRight>
    </Container>
  )
}