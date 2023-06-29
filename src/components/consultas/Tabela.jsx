import { useEffect, useState, useContext } from 'react';
import ConsultasContext from '../../contexts/ConsultasContext';
import UserContext from '../../contexts/UserContext';

const TabelaConsulta = () => {
  const { consultas, listConsultas } = useContext(ConsultasContext);
  const { userId } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listConsultas();
      setLoading(false);
    }

    carrega();
  }, []);

  const consultasFiltradas = consultas.filter((consulta) => consulta.userId === userId);

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
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TabelaConsulta;
