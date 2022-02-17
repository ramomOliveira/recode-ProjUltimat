import Button from '../Button';

import { Container, WrapperLeft, WrapperRight } from './style';

export default function Header() {
  return (
    <Container className="margins">
      <WrapperLeft>
        <div>
          <img src="/images/logo.png" alt="" />
          <p>Oluchi</p>
        </div>
        <ul>
          <li>Início</li>
          <li>Notícias</li>
          <li>Agendas</li>
          <li>Sobre</li>
          <li>Categorias</li>
        </ul>
      </WrapperLeft>

      <WrapperRight>
        <div>
          <input type="search" />
          <span className="material-icons-outlined">search</span>
        </div>

        <Button>Cadastrar</Button>
        <Button>Login</Button>
      </WrapperRight>
    </Container>
  );
}
