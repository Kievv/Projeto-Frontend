import { useEffect, useState, useContext } from 'react';
import ExamesContext from '../../contexts/ExamesContext';
import { useNavigate } from 'react-router';

const TabelaDeleteExame = () => {
  const { exames, listExames, removerExame } = useContext(ExamesContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listExames();
      setLoading(false);
    }

    carrega();
  }, []);

  async function handleRemover(key) {
    await removerExame(key);
    navigate('/exames');
  }
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
                  {exame.especialidade} - {exame.clinica} - {exame.local} - {exame.dia} - {exame.horario}
                </p>
                <button onClick={() => handleRemover(exame.key)} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TabelaDeleteExame;
