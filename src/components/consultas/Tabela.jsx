import { useEffect, useState, useContext } from 'react';
import ConsultasContext from '../../contexts/ConsultasContext';

const TabelaConsulta = () => {
  const { consultas, listConsultas } = useContext(ConsultasContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listConsultas();
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
          {consultas.map((consulta, key) => {
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
      ;
    </>
  );
};

export default TabelaConsulta;
