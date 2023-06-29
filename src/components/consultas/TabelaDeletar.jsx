import { useEffect, useState, useContext } from 'react';
import ConsultasContext from '../../contexts/ConsultasContext';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router';

const TabelaDeleteConsulta = () => {
  const { consultas, listConsultas, removerConsulta } = useContext(ConsultasContext);
  const { userId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const consultasFiltradas = consultas.filter((consulta) => consulta.userId === userId);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listConsultas();
      setLoading(false);
    }

    carrega();
  }, []);

  async function handleRemover(key) {
    await removerConsulta(key);
    navigate('/consultas');
  }
  return (
    <>
      {loading ? (
        <h3>Aguarde</h3>
      ) : (
        <ul>
          {consultasFiltradas.map((consulta, key) => {
            return (
              <li key={key}>
                <p>
                  {consulta.especialidade} - {consulta.clinica} - {consulta.local} - {consulta.dia} - {consulta.horario}
                </p>
                <button onClick={() => handleRemover(consulta.key)}>DELETAR ACIMA</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TabelaDeleteConsulta;
