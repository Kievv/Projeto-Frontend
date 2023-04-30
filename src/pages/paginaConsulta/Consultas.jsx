import Tabela from '../../components/tabela/Tabela';

const Consultas = () => {
  return (
    <>
      <h1>Suas consultas do dia</h1>
      <Tabela hospital="DAHER" medico="Giuseppe Camolli" horario="14:50" />
    </>
  );
};

export default Consultas;
