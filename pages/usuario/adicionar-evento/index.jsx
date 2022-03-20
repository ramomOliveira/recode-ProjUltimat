import LayoutUser from "../../../components/User/LayoutUser";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button';
import { WrapperForm, WrapperButton, Wrapper, InfoAddress } from '../../../styles/user/addEvent/style';
import apiProd from "../../../lib/apiProd";
import ArrowBack from "../../../components/ArrowBack";


export default function AddEvent() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addEvent = (data) => {
    apiProd.post('/event', {
      ...data,
    }).then(() => {
      router.push('/usuario/agenda')
    })
      .catch(error => {
        console.log(error)
      })
    reset()
  }

  return (
    <>
      <Head>
        <title>Oluchi - Painel Adicionar Evento</title>
      </Head>
      <LayoutUser title="Adicione um Evento" subTitle="Adicione seus eventos">

        <ArrowBack
          href="/usuario/agenda"
          hrefA="/usuario/agenda"
        />
        <WrapperForm onSubmit={handleSubmit(addEvent)}>
          <Wrapper>
            <h1>Informações do Evento</h1>
            <div>
              <div>
                <h3>Nome:</h3>
                <input type="text"
                  {...register('name', { required: true })}
                />
              </div>
              <div>
                <h3>Horário:</h3>
                <input
                  type="text"
                  {...register('hourEvent', { required: false })}
                />
              </div>
            </div>
          </Wrapper>

          <Wrapper>
            <h1>Descrição</h1>
            <div>
              <textarea rows="10"
                {...register('description', { required: false })}
              ></textarea>
            </div>
          </Wrapper>

          <Wrapper>
            <h1>Local do Evento</h1>
            <InfoAddress>
              <div>
                <h3>Cidade:</h3>
                <input type="text"
                  {...register('city', { required: false })}
                />
              </div>
              <div>
                <h3>Estado:</h3>
                <input type="text"
                  {...register('stateUf', { required: false })}
                />
              </div>
            </InfoAddress>

            <InfoAddress>
              <div>
                <h3>Rua:</h3>
                <input type="text"
                  {...register('address', { required: false })}
                />
              </div>
              <div>
                <h3>Bairro:</h3>
                <input type="text"
                  {...register('district', { required: false })}
                />
              </div>
            </InfoAddress>

            <InfoAddress>
              <div>
                <h3>Número:</h3>
                <input type="text"
                  {...register('number', { required: false })}
                />
              </div>
              <div>
                <h3>Data:</h3>
                <input type="text"
                  {...register('dateEvent', { required: false })}
                />
              </div>
            </InfoAddress>
          </Wrapper>

          <Wrapper>
            <h1>Informações de contato</h1>
            <div>
              <div>
                <h3>Celular:</h3>
                <input type="text"
                  {...register('tel', { required: false })}
                />
              </div>
              <div>
                <h3>E-mail:</h3>
                <input type="text"
                  {...register('email', { required: false })}
                />
              </div>
            </div>
          </Wrapper>

          <WrapperButton>
            <Button blackMode type="submit">Adicionar</Button>
          </WrapperButton>
        </WrapperForm>


      </LayoutUser>
    </>
  )
}