import CardDev from '../CardDev';
import { Container, Wrapper, Title, WrapperCards } from './style';

const arrayDevs = [
  {
    name: 'Felipe Klopper',
    imgAvatar: "/images/about/1.svg",
    hrefGit: "https://github.com/felipefklopper",
    hrefInsta: "https://www.instagram.com/cloupper_/",
    hrefLinkD: "https://www.linkedin.com/in/felipe-fernandes-klopper/",
    hrefZap: "https://wa.me/5521985738303?text=Olá%20Felipe!%20Gostaria%20de%20saber%20sobre%20o%20projeto%20Oluchi",
  },
  {
    name: 'Ramom Oliveira',
    imgAvatar: "/images/about/3.svg",
    hrefGit: "https://github.com/ramomOliveira",
    hrefInsta: "https://www.instagram.com/ramomdaiane/",
    hrefLinkD: "https://www.linkedin.com/in/ramomsilva/",
    hrefZap: "https://wa.me/5532984159697?text=Olá%20Ramom!%20Gostaria%20de%20saber%20sobre%20o%20projeto%20Oluchi",

  },
  {
    name: 'Aislan Feliciano',
    imgAvatar: "/images/about/4.svg",
    hrefGit: "https://github.com/Aislan-Feliciano",
    hrefInsta: "https://www.instagram.com/aislanfeliciano/",
    hrefLinkD: "https://www.linkedin.com/in/aislan-feliciano-9a75318a/",
    hrefZap: "https://wa.me/5521980972079?text=Olá%20Aislan!%20Gostaria%20de%20saber%20sobre%20o%20projeto%20Oluchi",
  },
  {
    name: 'Mauro Cunha',
    imgAvatar: "/images/about/2.svg",
    hrefGit: "https://github.com/mauroPh",
    hrefInsta: "https://www.instagram.com/maurophilipe/",
    hrefLinkD: "https://www.linkedin.com/in/mauroph/",
    hrefZap: "https://wa.me/5521965987582?text=Olá%20Mauro!%20Gostaria%20de%20saber%20sobre%20o%20projeto%20Oluchi",
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
              hrefZap={item.hrefZap}
            />
          ))}

        </WrapperCards>
      </Wrapper>
    </Container>
  )
}