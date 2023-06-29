import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addRemedio } from '../../services/RemediosService';
import CampoTexto from '../CampoTexto';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import Botao from '../Botao';
import './remedio.css'

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
    await addRemedio(data, userId);
    reset();
    navigate('/remedios');
  }

  return (
    <>
      <form className="container-form-remedio">
        <div className="container-remedio">
          <CampoTexto
            type="text"
            label="MEDICAMENTO"
            campo="texto"
            item="medicamento"
            placeholder="Digite aqui o nome do seu remédio..."
            name="medicamento"
            register={register}
            validateSchema={validateSchema}
            errors={errors}
          />

          <div className="texto-remedio">
            <CampoTexto
              type="text"
              label="DOSAGEM"
              campo="texto"
              item="dosagem"
              placeholder="Quantas cápsulas ao dia..."
              name="dosagem"
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />
            <CampoTexto
              type="text"
              label="MILIGRAMAS"
              campo="texto"
              item="miligramagem"
              placeholder="Digite a miligramagem..."
              name="miligramagem"
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />
          </div>

          <div className="texto-remedio">
            <CampoTexto
              type="text"
              label="HORÁRIO"
              campo="texto"
              item="horario"
              placeholder="Digite aqui o horário..."
              name="horario"
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />
            <CampoTexto
              type="text"
              label="HORÁRIO"
              campo="texto"
              item="horario1"
              placeholder="Digite aqui o horário..."
              name="horario1"
              register={register}
              validateSchema={validateSchemaOpcional}
              errors={errors}
            />
            <CampoTexto
              type="text"
              label="HORÁRIO"
              campo="texto"
              item="horario2"
              placeholder="Digite aqui o horário..."
              name="horario2"
              register={register}
              validateSchema={validateSchemaOpcional}
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
