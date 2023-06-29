import { useEffect, useState, useContext } from 'react';
import ExamesContext from '../../contexts/ExamesContext';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router';

const TabelaDeleteExame = () => {
  const { exames, listExames, removerExame } = useContext(ExamesContext);
  const { userId } = useContext(UserContext);
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

  const examesFiltrados = exames.filter((exame) => exame.userId === userId);

  return (
    <>
      {loading ? (
        <h3>Aguarde</h3>
      ) : (
        <ul>
          {examesFiltrados.map((exame, key) => {
            return (
              <li key={key}>
                <p>
                  {exame.especialidade} - {exame.clinica} - {exame.local} - {exame.dia} - {exame.horario}
                </p>
                <button onClick={() => handleRemover(exame.key)}>DELETAR EXAME</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TabelaDeleteExame;
