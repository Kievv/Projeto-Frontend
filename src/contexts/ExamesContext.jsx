import { createContext, useState } from 'react';
import { addExame, listExames } from '../services/ExamesService';

const ExamesContext = createContext({
  exames: [],
  listExames: () => {},
  addExame: () => {},
});

export function ExamesContextProvider(props) {
  const [meusExames, setMeusExames] = useState([]);

  async function inserir(Exame) {
    try {
      await addExame(Exame);
      setMeusExames([...meusExames, Exame]);
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

  const contexto = {
    Exames: meusExames,
    addExame: inserir,
    listExames: listar,
  };

  return <ExamesContext.Provider value={contexto}>{props.children}</ExamesContext.Provider>;
}

export default ExamesContext;
