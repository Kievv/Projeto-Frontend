import { useEffect, useState, useContext } from 'react';
import RemediosContext from '../../contexts/RemediosContext';
import { useNavigate } from 'react-router';
import UserContext from '../../contexts/UserContext';

const TabelaDeleteRemedio = () => {
  const { remedios, listRemedios, removerRemedio } = useContext(RemediosContext);
  const { userId } = useContext(UserContext);
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
                <button onClick={() => handleRemover(remedio.key)}>DELETAR REMEDIO</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TabelaDeleteRemedio;
