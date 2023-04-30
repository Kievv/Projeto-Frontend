import React from 'react';
import './Tabela.css';

function Tabela(props) {
  return (
    <table>
      <thead>
        <td>
          <th>{props.hospital}</th>
          <th>{props.medico}</th>
          <th className="last-column">{props.horario}</th>
        </td>
      </thead>
    </table>
  );
}

export default Tabela;
