import { createContext, useState } from 'react';
import { addRemedio, listRemedios } from '../services/RemediosService';

const RemediosContext = createContext({
  remedios: [],
  listRemedios: () => {},
  addRemedio: () => {},
  removeRemedio: () => {},
});

export function RemediosContextProvider(props) {
  const [meusRemedios, setMeusRemedios] = useState([]);

  async function inserir(remedio) {
    try {
      await addRemedio(remedio);
      setMeusRemedios([...meusRemedios, remedio]);
    } catch (err) {
      throw Error(err.message);
    }
  }

  async function listar() {
    try {
      const data = await listRemedios();
      setMeusRemedios(await data);
    } catch (err) {
      throw Error(err.message);
    }
  }

  async function remover(key) {
    try {
      await removeRemedio(key);
      setMeusRemedios((valorAntigo) => valorAntigo.filter((remedio) => remedio.id !== key));
    } catch (err) {
      throw Error(err.message);
    }
  }

  const contexto = {
    remedios: meusRemedios,
    addRemedio: inserir,
    listRemedios: listar,
    removeRemedio: remover,
  };

  return <RemediosContext.Provider value={contexto}>{props.children}</RemediosContext.Provider>;
}

export default RemediosContext;
