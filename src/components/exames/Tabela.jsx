import { useEffect, useState, useContext } from 'react';
import ExamesContext from '../../contexts/ExamesContext';

const TabelaExame = () => {
  const { exames, listExames } = useContext(ExamesContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listExames();
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
          {exames.map((exame, key) => {
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
      ;
    </>
  );
};

export default TabelaExame;
