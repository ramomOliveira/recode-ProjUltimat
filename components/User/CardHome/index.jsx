import Button from '../../Button';

import { Container, HeaderCard, TitleH1, Wrapper } from './style';

export default function CardHome() {
  return (
    <Container>
      <HeaderCard>
        <TitleH1>Criando com a Arte</TitleH1>
        <Button link>
          <span class="material-icons-outlined">
            edit
          </span>
        </Button>
      </HeaderCard>
      <Wrapper>
        <h2>Local:</h2>
        <p>Carmelia da Silva - Jardim/RJ</p>
      </Wrapper>
      <Wrapper>
        <h2>Data e horário</h2>
        <p>22/08/2022 as 21:00</p>
      </Wrapper>
    </Container>
  )
}