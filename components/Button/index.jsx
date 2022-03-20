import { Container } from './style';

export default function Button({ children, type = 'button', onClick, link, deleteMode, underline, noPadding, blackMode }) {
  return (
    <Container blackMode={blackMode} noPadding={noPadding} underline={underline} deleteMode={deleteMode} link={link} onClick={onClick} type={type}>
      {children}
    </Container>
  );
}
