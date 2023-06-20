import Button from '../Button';
import './Forms.css';
import TextField from './TextField';

const FormsRemedio = () => {
  return (
    <>
      <div>
        <form className="formsContainer flex">
          <div className="formDiv">
            <TextField
              label="MEDICAMENTO"
              campo="texto"
              item="medicamento"
              placeholder="Digite aqui seu medicamento..."
            />
            <div className="texto-duplo">
              <TextField label="DOSAGEM" campo="texto" item="dosagem" placeholder="Quantas cápsulas ao dia..." />

              <TextField label="MILIGRAMAS" campo="texto" item="miligramagem" placeholder="Digite a miligramagem..." />
            </div>

            <div className="texto-triplo">
              <TextField label="HORÁRIO" campo="texto" item="horario" placeholder="Digite aqui o horário..." />
              <TextField label="HORÁRIO" campo="texto" item="horario" placeholder="Digite aqui o horário..." />
              <TextField label="HORÁRIO" campo="texto" item="horario" placeholder="Digite aqui o horário..." />
            </div>

            <div className="btn-holder">
              <Button botao="CADASTRAR" classe="cadastrar" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormsRemedio;
