import React from 'react';
import './Tabela.css';

function Tabela(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>{props.hospital}</td>
          <td>{props.medico}</td>
          <td className="last-column">{props.horario}</td>
        </tr>
      </thead>
    </table>
  );
}

export default Tabela;
