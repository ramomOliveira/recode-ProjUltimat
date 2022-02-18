import { Container, WrapperLeft, WrapperRight } from './style';

export default function RangeAbout() {
  return (
    <Container className="margins">
      <WrapperLeft>
        <h1>
          Sobre o <span>Projeto</span>
        </h1>
      </WrapperLeft>

      <WrapperRight>
        <p>
          O Projeto Oluchi visa mapear, captar e difundir produções artísticas
          de pessoas negras no Rio de Janeiro. Inicialmente abrangemos apenas o
          âmbito regional, mas pretendemos futuramente ampliar essa divulgação
          para todo o Brasil.
        </p>
      </WrapperRight>
    </Container>
  );
}
