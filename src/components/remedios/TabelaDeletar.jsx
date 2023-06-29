import { useEffect, useState, useContext } from 'react';
import RemediosContext from '../../contexts/RemediosContext';
import { useNavigate } from 'react-router';
import Botao from '../Botao';

const TabelaDeleteRemedio = () => {
  const { remedios, listRemedios, removerRemedio } = useContext(RemediosContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listRemedios();
      setLoading(false);
    }

    carrega();
  }, []);

  async function handleRemover(key) {
    await removerRemedio(key);
    navigate('/remedios');
  }
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
                <button onClick={() => handleRemover(remedio.key)} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TabelaDeleteRemedio;
