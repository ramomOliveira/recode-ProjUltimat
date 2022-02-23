import { Container } from './style';

export default function Button({ children, type = 'button', onClick, link, deleteMode, underline, noPadding }) {
  return (
    <Container noPadding={noPadding} underline={underline} deleteMode={deleteMode} link={link} onClick={onClick} type={type}>
      {children}
    </Container>
  );
}
