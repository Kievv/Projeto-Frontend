import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addExame } from '../../services/ExamesService';
import CampoTexto from '../CampoTexto';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import Botao from '../Botao';

const Formulario = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { userId } = useContext(UserContext);

  const validateSchema = {
    required: {
      value: true,
      message: 'Campo obrigatório',
    },
    minLength: {
      value: 3,
      message: 'Campo deve ter no mínimo 3 caracteres',
    },
  };
  const validateSchemaOpcional = {
    required: {
      value: false,
    },
  };

  async function onSubmit(data) {
    await addExame(data, userId);
    reset();
    navigate('/exames');

    return (
      <>
        <form className="formsContainer">
          <div className="formDiv">
            <CampoTexto
              type="text"
              label="EXAME"
              campo="texto"
              item="exame"
              placeholder="Digite aqui o nome do exame..."
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />
            <div className="texto-duplo">
              <CampoTexto
                type="text"
                label="CLÍNICA"
                campo="texto"
                item="clinica"
                placeholder="Nome da clínica..."
                register={register}
                validateSchema={validateSchema}
                errors={errors}
              />

              <CampoTexto
                type="text"
                label="LOCAL"
                campo="texto"
                item="local"
                placeholder="Informe o local da consulta..."
                register={register}
                validateSchema={validateSchema}
                errors={errors}
              />
            </div>
            <div className="texto-duplo">
              <CampoTexto
                type="text"
                label="DIA"
                campo="texto"
                item="dia"
                placeholder="Digite o dia do exame..."
                register={register}
                validateSchema={validateSchema}
                errors={errors}
              />
              <CampoTexto
                type="text"
                label="HORÁRIO"
                campo="texto"
                item="horario"
                placeholder="Digite o horário do exame..."
                register={register}
                validateSchema={validateSchema}
                errors={errors}
              />
            </div>
            <div className="btn-holder">
              <Botao botao="CADASTRAR" classe="cadastrar" />
            </div>
          </div>
        </form>
      </>
    );
  }
};
export default Formulario;
