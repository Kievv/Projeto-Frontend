import { useEffect, useState, useContext } from 'react';
import ExamesContext from '../../contexts/ExamesContext';
import UserContext from '../../contexts/UserContext';

const TabelaExame = () => {
  const { exames, listExames } = useContext(ExamesContext);
  const { userId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listExames();
      setLoading(false);
    }
    carrega();
  }, []);

  const examesFiltrados = exames.filter((exame) => exame.userId === userId);

  return (
    <>
      {examesFiltrados.length === 0 ? (
        <h3>Nenhum exame cadastrado</h3>
      ) : loading ? (
        <h3>Aguarde</h3>
      ) : (
        <ul>
          {examesFiltrados.map((exame, key) => {
            return (
              <li key={key}>
                <p>
                  {exame.exame} - {exame.clinica} - {exame.local} - {exame.dia} - {exame.horario}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TabelaExame;
