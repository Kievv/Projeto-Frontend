import { useEffect, useState, useContext } from 'react';
import RemediosContext from '../../contexts/RemediosContext';

const TabelaRemedio = (props) => {
  const { remedios, listRemedios } = useContext(RemediosContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listRemedios();
      setLoading(false);
    }
    carrega();
  }, []);

  const filtrado = remedios.filter((remedio) => remedio.userId === props.userId);
  console.log(filtrado, 'Filtrado');

  return (
    <>
      {loading ? (
        <h3>Aguarde</h3>
      ) : (
        <ul>
          {filtrado.map((remedio, key) => {
            return (
              <li key={key}>
                <p>{remedio.medicamento}</p>
                <p>{remedio.dosagem}</p>
                <p>{remedio.miligramagem}</p>
                <p>{remedio.horario}</p>
              </li>
            );
          })}
        </ul>
      )}
      ;
    </>
  );
};

export default TabelaRemedio;