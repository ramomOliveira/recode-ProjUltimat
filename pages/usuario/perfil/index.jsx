import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useEffect, useContext } from 'react'
import apiProd from '../../../lib/apiProd';
import Button from '../../../components/Button';
import LayoutUser from '../../../components/User/LayoutUser'
import AuthContext from '../../../context/AuthContext';
import AppContext from '../../../context/App';
import AlertMessage from '../../../components/AlertMessage';

import { WrapperForm, WrapperButton } from '../../../styles/user/profile/style';

export default function Configuration() {
  const { showModalSuccess } = useContext(AppContext);
  const { user } = useContext(AuthContext)
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,

  } = useForm();

  const saveArtist = (data) => {
    apiProd.post('/artist', {
      ...data,
    }).then(() => {
      showModalSuccess("Alterações Salvas com Sucesso!");
    })
      .catch(error => {
        console.log(error)
      })

  }

  useEffect(() => {
    apiProd.get('/artist/profile').then(({ data }) => {
      setValue('name', data?.name || user?.displayName);
      setValue('profession', data?.profession);
      setValue('description', data?.description);
      setValue('city', data?.city);
      setValue('stateUf', data?.stateUf);
      setValue('tel', data?.tel);
      setValue('email', data?.email || user?.email);


    });
  }, []);



  return (
    <>
      <Head>
        <title>Oluchi - Painel da Página</title>
      </Head>
      <LayoutUser title="Perfil da Página" subTitle="Edite, adicione suas informações para sua página no site">

        <WrapperForm onSubmit={handleSubmit(saveArtist)}>
          <div>
            <h1>Informações gerais</h1>
            <div>
              <div>
                <h3>Nome:</h3>
                <input type="text"
                  defaultValue=""
                  {...register('name', { required: true })}
                />
                <AlertMessage>
                  {errors.name && 'Campo obrigatório'}
                </AlertMessage>
              </div>
              <div>
                <h3>Profissão:</h3>
                <input type="text"
                  {...register('profession', { required: true })}
                />
                <AlertMessage>
                  {errors.profession && 'Campo obrigatório'}
                </AlertMessage>
              </div>
            </div>
          </div>

          <div>
            <h1>Fale um Pouco sobre seu trabalho</h1>
            <div>
              <textarea rows="10"
                {...register('description', { required: true })}
              ></textarea>
            </div>
            <AlertMessage>
              {errors.description && 'Campo obrigatório'}
            </AlertMessage>
          </div>

          <div>
            <h1>Endereço</h1>
            <div>
              <div>
                <h3>Cidade</h3>
                <input type="text"
                  {...register('city', { required: true })}
                />
                <AlertMessage>
                  {errors.city && 'Campo obrigatório'}
                </AlertMessage>
              </div>
              <div>
                <h3>Estado</h3>
                <input type="text"
                  {...register('stateUf', { required: true })}
                />
                <AlertMessage>
                  {errors.stateUf && 'Campo obrigatório'}
                </AlertMessage>
              </div>
            </div>
          </div>

          <div>
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
                  defaultValue=""
                  {...register('email', { required: true })}
                />
                <AlertMessage>
                  {errors.email && 'Campo obrigatório'}
                </AlertMessage>
              </div>
            </div>
          </div>

          <WrapperButton>
            <Button blackMode type="submit">Salvar Alterações</Button>
          </WrapperButton>
        </WrapperForm>
      </LayoutUser>
    </>
  )
}