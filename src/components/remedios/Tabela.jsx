import { useEffect, useState, useContext } from 'react';
import RemediosContext from '../../contexts/RemediosContext';

const TabelaRemedio = (props) => {
  const { remedios, listRemedios } = useContext(RemediosContext);
  const [loading, setLoading] = useState(false);
  const [medicamento, setMedicamento] = useState([]);

  // problemas para renderizar na primeira vez que o componente é carregado
  useEffect(() => {
    async function carrega() {
      setLoading(true);
      const medica = await listRemedios();
      console.log(...medica);
      setMedicamento(...medica);
      setLoading(false);
    }

    carrega();
  }, [medicamento]);

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
