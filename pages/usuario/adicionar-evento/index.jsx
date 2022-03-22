import LayoutUser from "../../../components/User/LayoutUser";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button';
import apiProd from "../../../lib/apiProd";
import ArrowBack from "../../../components/ArrowBack";
import AppContext from '../../../context/App';
import AlertMessage from '../../../components/AlertMessage';

import { WrapperForm, WrapperButton, Wrapper, Info } from '../../../styles/user/addEvent/style';


export default function AddEvent() {
  const { showModalSuccess } = useContext(AppContext);
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
      showModalSuccess("Evento Adicionado com Sucesso!");
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
            <Info>
              <div>
                <h3>Nome do Evento:</h3>
                <input type="text"
                  placeholder="Ex: Música ao Vivo"
                  {...register('name', { required: true })}

                />
                <AlertMessage>
                  {errors.name && 'Campo obrigatório'}
                </AlertMessage>
              </div>
              <div>
                <h3>Horário:</h3>
                <input
                  type="text"
                  {...register('hourEvent', { required: true })}
                />
                <AlertMessage>
                  {errors.hourEvent && 'Campo obrigatório'}
                </AlertMessage>
              </div>
            </Info>

            <Info>
              <div>
                <h3>Seu nome ou seu nome Artístico:</h3>
                <input type="text"
                  {...register('nameArtist', { required: true })}
                />
                <AlertMessage>
                  {errors.nameArtist && 'Campo obrigatório'}
                </AlertMessage>
              </div>
              <div>
                <h3>Preço da entrada:</h3>
                <input
                  placeholder="Ex: Entrada Gratis ou R$ 50,00"
                  type="text"
                  {...register('prece', { required: true })}
                />
                <AlertMessage>
                  {errors.prece && 'Campo obrigatório'}
                </AlertMessage>
              </div>
            </Info>
          </Wrapper>

          <Wrapper>
            <h1>Descrição</h1>
            <div>
              <textarea rows="10"
                {...register('description', { required: true })}
              ></textarea>

            </div>
            <AlertMessage>
              {errors.description && 'Campo obrigatório'}
            </AlertMessage>
          </Wrapper>

          <Wrapper>
            <h1>Local do Evento</h1>
            <Info>
              <div>
                <h3>Cidade:</h3>
                <input type="text"
                  {...register('city', { required: true })}
                />
                <AlertMessage>
                  {errors.city && 'Campo obrigatório'}
                </AlertMessage>
              </div>
              <div>
                <h3>Estado:</h3>
                <input type="text"
                  {...register('stateUf', { required: true })}
                />
                <AlertMessage>
                  {errors.stateUf && 'Campo obrigatório'}
                </AlertMessage>
              </div>
            </Info>

            <Info>
              <div>
                <h3>Rua:</h3>
                <input type="text"
                  {...register('address', { required: true })}
                />
                <AlertMessage>
                  {errors.address && 'Campo obrigatório'}
                </AlertMessage>
              </div>
              <div>
                <h3>Bairro:</h3>
                <input type="text"
                  {...register('district', { required: true })}
                />
                <AlertMessage>
                  {errors.district && 'Campo obrigatório'}
                </AlertMessage>
              </div>
            </Info>

            <Info>
              <div>
                <h3>Número:</h3>
                <input type="text"
                  {...register('number', { required: true })}
                />
                <AlertMessage>
                  {errors.number && 'Campo obrigatório'}
                </AlertMessage>
              </div>
              <div>
                <h3>Data:</h3>
                <input type="text"
                  {...register('dateEvent', { required: true })}
                />
                <AlertMessage>
                  {errors.dateEvent && 'Campo obrigatório'}
                </AlertMessage>
              </div>
            </Info>
          </Wrapper>

          <Wrapper>
            <h1>Informações de contato</h1>
            <div>
              <div>
                <h3>Celular:</h3>
                <input type="text"
                  {...register('tel', { required: true })}
                />
                <AlertMessage>
                  {errors.tel && 'Campo obrigatório'}
                </AlertMessage>
              </div>
              <div>
                <h3>E-mail:</h3>
                <input type="text"
                  {...register('email', { required: true })}
                />
                <AlertMessage>
                  {errors.email && 'Campo obrigatório'}
                </AlertMessage>
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