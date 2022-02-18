import Button from '../Button';

export default function CardContact() {
  return (
    <div>
      <div>
        <h1>Contato</h1>

        <div>
          <div>
            <h3>Nome</h3>
            <input type="text" name="" id="" />
          </div>

          <div>
            <h3>Email</h3>
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3>Mensagem</h3>
          <textarea name="mensagem" id="mensagem" />
        </div>
        <Button>Enviar</Button>
      </div>
    </div>
  );
}
