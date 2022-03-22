import Link from 'next/link';

import { Container, WrapperIcons, Title, ImgAvatar, IconGit, IconInsta, IconLinkD, IconZap } from './style';

export default function CardDev({ name, imgAvatar, hrefGit, hrefLinkD, hrefInsta, hrefZap }) {
  return (
    <Container>
      <Title>{name}</Title>
      <ImgAvatar><img src={imgAvatar} /></ImgAvatar>
      <WrapperIcons>

        <a href={hrefGit} target="_blank">
          <IconGit />
        </a>

        <a href={hrefInsta} target="_blank">
          <IconInsta />
        </a>

        <a href={hrefLinkD} target="_blank">
          <IconLinkD />
        </a>

        <a href={hrefZap} target="_blank">
          <IconZap />
        </a>

      </WrapperIcons>
    </Container>
  )
}