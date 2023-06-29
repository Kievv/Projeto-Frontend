import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addConsulta } from '../../services/ConsultasService';
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
    await addConsulta(data, userId);
    reset();
    navigate('/consultas');
  }

  return (
    <>
      <form className="formsContainer">
        <div className="formDiv">
          <CampoTexto
            type="text"
            label="ESPECIALIDADE"
            campo="texto"
            item="especialidade"
            name="especialidade"
            placeholder="Digite aqui a especialidade..."
            register={register}
            validateSchema={validateSchema}
            errors={errors}
          />
          <div className="texto-duplo">
            <CampoTexto
              type="text"
              label="CLINICA"
              campo="texto"
              item="clinica"
              name="clinica"
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
              name="local"
              placeholder="Digite o endereço da clinica..."
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />

            <CampoTexto
              type="text"
              label="DIA"
              campo="texto"
              item="dia"
              name="dia"
              placeholder="Informe o dia da consulta..."
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />
          </div>
          <div className="texto-duplo">
            <CampoTexto
              type="text"
              label="HORARIO"
              campo="texto"
              item="horario"
              name="horario"
              placeholder="Digite o horário..."
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />
          </div>
          <div className="btn-holder">
            <Botao botao="CADASTRAR" classe="cadastrar" handleClick={handleSubmit(onSubmit)} type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Formulario;
