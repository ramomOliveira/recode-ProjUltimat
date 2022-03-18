import Link from 'next/link';

import { Container, WrapperIcons, Title, ImgAvatar, IconGit, IconInsta, IconLinkD } from './style';

export default function CardDev({ name, imgAvatar, hrefGit, hrefLinkD, hrefInsta }) {
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

      </WrapperIcons>
    </Container>
  )
}