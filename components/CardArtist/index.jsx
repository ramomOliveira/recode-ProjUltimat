import { Container } from './style';

export default function CardArtist({ name, profession, description, city, stateUf, email, tel }) {
  return (
    <Container>
      <div>
        <h1>Nome:</h1>
        <p>{name}</p>
      </div>
      <div>
        <h1>Profissão:</h1>
        <p>{profession}</p>
      </div>
      <div>
        <h1>Um pouco sobre João:</h1>
        <p>{description}</p>
      </div>
      <div>
        <h1>Cidade</h1>
        <p>{city}</p>
      </div>
      <div>
        <h1>Estado</h1>
        <p>{stateUf}</p>
      </div>
      <div>
        <h1>Email:</h1>
        <p>{email}</p>
      </div>
      <div>
        <h1>Telefone para contato:</h1>
        <p>{tel}</p>
      </div>

    </Container>
  )
}