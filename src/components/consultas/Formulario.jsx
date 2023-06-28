// import { app, database } from 'services/firebase';
import { useState } from 'react';
import Botao from '../../components/Botao';
import CampoTexto from '../../components/CampoTexto';

const dbInstance = collection(database, 'consultas');

const Formulario = () => {
  const [local, setLocal] = useState('');
  const [medico, setMedico] = useState('');
  const [horario, setHorario] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const cadastrarConsulta = () => {
    addDoc(dbInstance, {
      consultorio: local,
      medico: medico,
      horario: horario,
      especialidade: especialidade,
    });
  };

  const handleChangeLocal = (event) => {
    setLocal(event.target.value);
  };
  const handleChangeMedico = (event) => {
    setMedico(event.target.value);
  };
  const handleChangeHorario = (event) => {
    setHorario(event.target.value);
  };
  const handleChangeEspecialidade = (event) => {
    setEspecialidade(event.target.value);
  };

  return (
    <>
      <form className="formsContainer">
        <div className="formDiv">
          <CampoTexto
            label="CONSULTORIO"
            campo="texto"
            item="endereco"
            placeholder="Digite aqui o endereço..."
            onChange={handleChangeLocal}
            value={local}
          />
          <div className="texto-duplo">
            <CampoTexto
              label="MÉDICO"
              campo="texto"
              item="médico"
              placeholder="Nome do médico..."
              onChange={handleChangeMedico}
              value={medico}
            />

            <CampoTexto
              label="HORÁRIO"
              campo="texto"
              item="horário"
              placeholder="Horário da consulta..."
              onChange={handleChangeHorario}
              value={horario}
            />
          </div>

          <CampoTexto
            label="ESPECIALIDADE"
            campo="texto"
            item="especialidade"
            placeholder="Digite a especialidade..."
            onChange={handleChangeEspecialidade}
            value={especialidade}
          />

          <div className="btn-holder">
            <Botao botao="CADASTRAR" classe="cadastrar" onPress={cadastrarConsulta} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Formulario;
