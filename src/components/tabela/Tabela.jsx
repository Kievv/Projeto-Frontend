import React from 'react';
import "./Tabela.css"

function Tabela(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>{props.}</th>
          <th>MÉDICO</th>
          <th className="last-column">HORÁRIO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>exemplo</td>
          <td>exemplo</td>
          <td className="last-column">exemplo</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tabela;
