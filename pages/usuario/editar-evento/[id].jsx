import LayoutUser from "../../../components/User/LayoutUser";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button';
import { WrapperForm, WrapperButton } from '../../../styles/user/addEvent/style';
import apiProd from "../../../lib/apiProd";


export default function EditEvent() {
  const router = useRouter();
  const [event, setEvent] = useState({});

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();


  useEffect(() => {
    if (router.query.id) {
      apiProd.get(`/event/${router.query.id}`).then(({ data }) => {
        setEvent(data);
        setValue("name", data.name);
        setValue("hourEvent", data.hourEvent);
        setValue("description", data.description);
        setValue("city", data.city);
        setValue("stateUf", data.stateUf);
        setValue("address", data.address);
        setValue("district", data.district);
        setValue("address", data.address);
        setValue("number", data.number);
        setValue("dateEvent", data.dateEvent);
        setValue("tel", data.tel);
        setValue("email", data.email);

      }).catch(error => {
        console.log(error)
      })
    }
  }, [router])

  const editEvent = (data) => {
    apiProd.put(`/event/${router.query.id}`, {
      ...data,
    }
    ).then(() => {

      router.push("/usuario/agenda");
    })

  }

  const deleteProduct = () => {
    apiProd.delete(`/event/${router.query.id}`).then(() => {

      router.push("/usuario/agenda");
    });
  };

  return (
    <>
      <Head>
        <title>Oluchi - Painel Adicionar Evento</title>
      </Head>
      <LayoutUser title="Adicione um Evento" subTitle="Adicione seus eventos">


        <WrapperForm onSubmit={handleSubmit(editEvent)}>
          <div>
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
          </div>

          <div>
            <h1>Descrição</h1>
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
            </div>

            <div>
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
            </div>

            <div>
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
                  {...register('email', { required: false })}
                />
              </div>
            </div>
          </div>

          <WrapperButton>
            <Button type="submit">Salvar Alterações</Button>
            <Button type="button" onClick={deleteProduct} >Delete</Button>
          </WrapperButton>
        </WrapperForm>


      </LayoutUser>
    </>
  )
}