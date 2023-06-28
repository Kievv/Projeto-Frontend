// import { app, database } from '../../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import Botao from '../../components/Botao';
import CampoTexto from '../../components/CampoTexto';

const dbInstance = collection(database, 'exames');

const Formulario = () => {
  const [exame, setExame] = useState('');
  const [clinica, setClinica] = useState('');
  const [local, setLocal] = useState('');
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');

  const cadastrarExame = () => {
    addDoc(dbInstance, {
      exame: exame,
      clinica: clinica,
      local: local,
      dia: dia,
      horario: horario,
    });
  };

  const handleChangeExame = (event) => {
    setExame(event.target.value);
  };
  const handleChangeClinica = (event) => {
    setClinica(event.target.value);
  };
  const handleChangeLocal = (event) => {
    setLocal(event.target.value);
  };
  const handleChangeDia = (event) => {
    setDia(event.target.value);
  };
  const handleChangeHorario = (event) => {
    setHorario(event.target.value);
  };

  return (
    <>
      <form className="formsContainer">
        <div className="formDiv">
          <CampoTexto
            label="EXAME"
            campo="texto"
            item="exame"
            placeholder="Digite aqui o nome do exame..."
            onChange={handleChangeExame}
            value={exame}
          />
          <div className="texto-duplo">
            <CampoTexto
              label="CLÍNICA"
              campo="texto"
              item="clinica"
              placeholder="Nome da clínica..."
              onChange={handleChangeClinica}
              value={clinica}
            />

            <CampoTexto
              label="LOCAL"
              campo="texto"
              item="local"
              placeholder="Informe o local da consulta..."
              onChange={handleChangeLocal}
              value={local}
            />
          </div>
          <div className="texto-duplo">
            <CampoTexto
              label="DIA"
              campo="texto"
              item="dia"
              placeholder="Digite o dia do exame..."
              onChange={handleChangeDia}
              value={dia}
            />
            <CampoTexto
              label="HORÁRIO"
              campo="texto"
              item="horario"
              placeholder="Digite o horário do exame..."
              onChange={handleChangeHorario}
              value={horario}
            />
          </div>
          <div className="btn-holder">
            <Botao botao="CADASTRAR" classe="cadastrar" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Formulario;
