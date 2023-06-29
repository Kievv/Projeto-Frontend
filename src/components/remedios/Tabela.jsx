import { useEffect, useState, useContext } from 'react';
import RemediosContext from '../../contexts/RemediosContext';
import UserContext from '../../contexts/UserContext';

const TabelaRemedio = () => {
  const { remedios, listRemedios } = useContext(RemediosContext);
  const { userId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listRemedios();
      setLoading(false);
    }

    carrega();
  }, []);

  const remediosFiltrados = remedios.filter((remedio) => remedio.userId === userId);

  return (
    <>
      {loading ? (
        <h3>Aguarde</h3>
      ) : (
        <ul>
          {remediosFiltrados.map((remedio, key) => {
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
    </>
  );
};

export default TabelaRemedio;
