import Button from '../Button';

import {
  WrapperModal,
  Container,
  HeaderModal
} from './styles';

export default function ModalSuccess({
  id = 'modal',
  show,
  onClose,
  title
}) {

  const handleOutsideClick = () => {
    onClose();
  };

  if (!show) {
    return null;
  };
  return (
    <WrapperModal
      id={id}
      onClick={handleOutsideClick}
    >
      <Container
        onClick={(event) => event.stopPropagation()}
      >
        <HeaderModal>
          <span className="material-icons">
            check_circle
          </span>
          <h1>{title}</h1>
          <Button
            link
            noPadding
            onClick={() => onClose()}
          >
            <i className="material-icons-outlined">
              close
            </i>
          </Button>
        </HeaderModal>
      </Container>
    </WrapperModal>
  )
}