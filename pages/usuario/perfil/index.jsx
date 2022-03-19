import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useEffect, useContext } from 'react'
import apiProd from '../../../lib/apiProd';
import Button from '../../../components/Button';
import LayoutUser from '../../../components/User/LayoutUser'
import AuthContext from '../../../context/AuthContext';

import { WrapperForm, WrapperButton } from '../../../styles/user/profile/style';

export default function Configuration() {
  const { user } = useContext(AuthContext)
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const addArtist = (data) => {
    apiProd.post('/artist', {
      ...data,
    }).then(() => {

    })
      .catch(error => {
        console.log(error)
      })
    reset()
  }

  useEffect(() => {
    apiProd.get('/artist').then(({ data }) => {
      setValue('name', data.name);
      setValue('profession', data.profession);
      setValue('description', data.description);
      setValue('city', data.city);
      setValue('stateUf', data.stateUf);
      setValue('tel', data.tel);
      setValue('email', data.email);

    });
  }, []);

  const updateInfoArtist = (data) => {
    apiProd.put('/artist', {
      ...data,
    });

  };

  return (
    <>
      <Head>
        <title>Oluchi - Painel da Página</title>
      </Head>
      <LayoutUser title="Perfil da Página" subTitle="Edite, adicione suas informações para sua página no site">

        <WrapperForm onSubmit={handleSubmit(addArtist)}>
          <div>
            <h1>Informações gerais</h1>
            <div>
              <div>
                <h3>Nome:</h3>
                <input type="text"
                  defaultValue={user?.displayName}
                  {...register('name', { required: true })}
                />
              </div>
              <div>
                <h3>Profissão:</h3>
                <input type="text"
                  {...register('profession', { required: false })}
                />
              </div>
            </div>
          </div>

          <div>
            <h1>Fale um Pouco sobre seu trabalho</h1>
            <div>
              <textarea rows="10"
                {...register('description', { required: false })}
              ></textarea>
            </div>
          </div>

          <div>
            <h1>Endereço</h1>
            <div>
              <div>
                <h3>Cidade</h3>
                <input type="text"
                  {...register('city', { required: false })}
                />
              </div>
              <div>
                <h3>Estado</h3>
                <input type="text"
                  {...register('stateUf', { required: false })}
                />
              </div>
            </div>
          </div>

          <div>
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
                  defaultValue={user?.email}
                  {...register('email', { required: false })}
                />
              </div>
            </div>
          </div>

          <WrapperButton>
            <Button type="submit">Salvar Alterações</Button>
          </WrapperButton>
        </WrapperForm>
      </LayoutUser>
    </>
  )
}