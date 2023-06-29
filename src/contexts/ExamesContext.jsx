import { createContext, useState } from 'react';
import { addExame, listExames, removerExame } from '../services/ExamesService';

const ExamesContext = createContext({
  exames: [],
  listExames: () => {},
  addExame: () => {},
  removerExame: () => {},
});

export function ExamesContextProvider(props) {
  const [meusExames, setMeusExames] = useState([]);

  async function inserir(exame) {
    try {
      await addExame(Exame);
      setMeusExames([...meusExames, exame]);
    } catch (err) {
      throw Error(err.message);
    }
  }

  async function listar() {
    try {
      const data = await listExames();
      setMeusExames(await data);
    } catch (err) {
      throw Error(err.message);
    }
  }

  async function remover(key) {
    try {
      await removerExame(key);
      setMeusExames((valorAntigo) => valorAntigo.filter((exame) => exame.id !== key));
    } catch (err) {
      throw Error(err.message);
    }
  }

  const contexto = {
    exames: meusExames,
    addExame: inserir,
    listExames: listar,
    removerExame: remover,
  };

  return <ExamesContext.Provider value={contexto}>{props.children}</ExamesContext.Provider>;
}

export default ExamesContext;
