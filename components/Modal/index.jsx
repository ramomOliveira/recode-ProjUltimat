import Button from '../Button';

import { WrapperModal, Container, HeaderModal } from './style';
// Prop show ele fica visível, onclose para passar função de fechar,
// background ele ativa fundo rgba, DNone oculta o botão de fechar o modal
export default function Modal({
  id = 'modal',
  show,
  onClose,
  title,
  children,
}) {
  const handleOutsideClick = () => {
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <WrapperModal id={id} onClick={handleOutsideClick}>
      <Container onClick={(event) => event.stopPropagation()}>
        <HeaderModal>
          <h1>{title}</h1>
          <Button link onClick={() => onClose()}>
            <i className="material-icons-outlined">close</i>
          </Button>
        </HeaderModal>
        {children}
      </Container>
    </WrapperModal>
  );
}
