import { useEffect, useState, useContext } from 'react';
import RemediosContext from '../../contexts/RemediosContext';

const TabelaRemedio = (props) => {
  const { remedios, listRemedios } = useContext(RemediosContext);
  const [loading, setLoading] = useState(false);

  // problemas para renderizar na primeira vez que o componente é carregado
  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listRemedios();
      setLoading(false);
    }

    carrega();
  }, []);

  return (
    <>
      {loading ? (
        <h3>Aguarde</h3>
      ) : (
        <ul>
          {remedios.map((remedio, key) => {
            return (
              <li key={key}>
                <p>
                  {remedio.medicamento} - {remedio.dosagem} - {remedio.miligramagem} - {remedio.horario}
                </p>
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
