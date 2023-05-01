import Button from '../Button';
import './ConsultasForm.css';
import TextField from './TextField';

const FormsRemedio = () => {
  return (
    <>
      <form className="formsContainer">
        <div className="formDiv">
          <TextField
            label="HOSPITAL"
            campo="texto"
            item="hospital"
            placeholder="Digite aqui o nome do hospital..."
          />
          <div className="texto-duplo">
            <TextField label="MÉDICO" campo="texto" item="médico" placeholder="Nome do médico..." />

            <TextField label="HORÁRIO" campo="texto" item="horário" placeholder="Horário da consulta..." />
          </div>

            <TextField label="ESPECIALIDADE" campo="texto" item="especialidade" placeholder="Digite a especialidade..." />

          <div className="btn-holder">
            <Button botao="CADASTRAR" classe="cadastrar" />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormsRemedio;
