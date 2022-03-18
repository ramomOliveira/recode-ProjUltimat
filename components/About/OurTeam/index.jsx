import CardDev from '../CardDev';
import { Container, Wrapper, Title, WrapperCards } from './style';

const arrayDevs = [
  {
    name: 'Felipe Klopper',
    imgAvatar: "/images/about/1.svg",
    hrefGit: "/",
    hrefInsta: "/",
    hrefLinkD: "/",
  },
  {
    name: 'Ramom Oliveira',
    imgAvatar: "/images/about/3.svg",
    hrefGit: "https://github.com/ramomOliveira",
    hrefInsta: "https://www.instagram.com/ramomdaiane/",
    hrefLinkD: "https://www.linkedin.com/in/ramomsilva/",
  },
  {
    name: 'Aislan Feliciano',
    imgAvatar: "/images/about/4.svg",
    hrefGit: "/",
    hrefInsta: "/",
    hrefLinkD: "/",
  },
  {
    name: 'Mauro Cunha',
    imgAvatar: "/images/about/2.svg",
    hrefGit: "/",
    hrefInsta: "/",
    hrefLinkD: "/",
  },
]

export default function OurTeam() {
  return (
    <Container>
      <Wrapper className="margins">
        <Title>
          <h1>Desenvolvedores <br /> do <span>Projeto</span></h1>
        </Title>
        <WrapperCards>
          {arrayDevs.map((item) => (
            <CardDev
              name={item.name}
              imgAvatar={item.imgAvatar}
              hrefGit={item.hrefGit}
              hrefInsta={item.hrefInsta}
              hrefLinkD={item.hrefLinkD}
            />
          ))}

        </WrapperCards>
      </Wrapper>
    </Container>
  )
}