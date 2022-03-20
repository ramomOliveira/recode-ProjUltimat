import Button from '../Button';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Container, WrapperTop, WrapperVertical, WrapperButton } from './style';

export default function CardContact() {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const pagina = () => {
    router.push("/agenda")
  }

  return (
    <Container className="margins">
      <form action="https://api.staticforms.xyz/submit" method="post" >
        <input type="hidden" name="accessKey" value="f82b7748-96e8-40b1-b62c-610665fa059b" />
        <input type="hidden" name="redirectTo" value="/" />
        <WrapperTop>
          <h1>Contato</h1>

          <div>
            <WrapperVertical>
              <h3>Nome</h3>
              <input type="text" name="name" id="" defaultValue="" />
            </WrapperVertical>

            <WrapperVertical>
              <h3>Email</h3>
              <input type="text" name="email" id="" />
            </WrapperVertical>
          </div>
        </WrapperTop>

        <div>
          <WrapperVertical>
            <h3>Mensagem</h3>
            <textarea name="message" id="mensagem" rows="5" />
          </WrapperVertical>
        </div>
        <WrapperButton>
          <Button type="submit">Enviar</Button>
        </WrapperButton>
      </form>
    </Container >
  );
}
