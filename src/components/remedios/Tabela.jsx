import { useEffect, useState, useContext } from 'react';
import RemediosContext from '../../contexts/RemediosContext';
import { set } from 'react-hook-form';

const TabelaRemedio = (props) => {
  const { remedios, listRemedios } = useContext(RemediosContext);
  const [loading, setLoading] = useState(false);
  const [medicamento, setMedicamento] = useState([]);

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
