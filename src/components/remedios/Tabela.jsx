import { useEffect, useState, useContext } from 'react';
import RemediosContext from '../../contexts/RemediosContext';

const TabelaRemedio = (props) => {
  const { remedios, listRemedios } = useContext(RemediosContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      await listRemedios();
      setLoading(false);
    }
    carrega();
  }, []);

  const filtrado = remedios.filter((remedio) => remedio.userId === props.userId);
  console.log(filtrado, 'Filtrado');

  return (
    <table>
      <thead>
        <tr>
          {props.exibirCheckbox && (
            <th>
              <input type="checkbox" name="deletar" id="check" className="checkbox" />
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {filtrado.map((remedio) => (
          <tr key={remedio.id}>
            {props.exibirCheckbox && (
              <td>
                <input type="checkbox" name="deletar" className="checkbox" />
              </td>
            )}
            <td>
              <p>{remedio.medicamento}</p>
            </td>
            <td>
              <p>{remedio.dosagem}</p>
            </td>
            <td>
              <p>{remedio.miligramagem}</p>
            </td>
            <td>
              <p>{remedio.horario}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaRemedio;
