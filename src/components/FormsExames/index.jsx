import Button from '../Button';
import './ExamesForm.css';
import TextField from './TextField';

const FormsExames = () => {
  return (
    <>
      <form className="formsContainer">
        <div className="formDiv">
          <TextField label="EXAME" campo="texto" item="exame" placeholder="Digite aqui o nome do exame..." />
          <div className="texto-duplo">
            <TextField label="CLÍNICA" campo="texto" item="clinica" placeholder="Nome da clínica..." />

            <TextField label="LOCAL" campo="texto" item="local" placeholder="Informe o local da consulta..." />
          </div>
          <div className="texto-duplo">
            <TextField label="DIA" campo="texto" item="dia" placeholder="Digite o dia do exame..." />
            <TextField label="HORÁRIO" campo="texto" item="horario" placeholder="Digite o horário do exame..." />
          </div>
          <div className="btn-holder">
            <Button botao="CADASTRAR" classe="cadastrar" />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormsExames;
