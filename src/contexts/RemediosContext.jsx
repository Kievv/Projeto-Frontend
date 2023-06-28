import { createContext, useState } from 'react';
import { addRemedio, listRemedios } from '../services/RemediosService';

const RemediosContext = createContext({
  remedios: [],
  listRemedios: () => {},
  addRemedio: () => {},
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

      setMeusRemedios(data);
      console.log(data, 'Data');
    } catch (err) {
      throw Error(err.message);
    }
  }

  const contexto = {
    remedios: meusRemedios,
    addRemedio: inserir,
    listRemedios: listar,
  };

  return <RemediosContext.Provider value={contexto}>{props.children}</RemediosContext.Provider>;
}

export default RemediosContext;
