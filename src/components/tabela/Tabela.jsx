import React from 'react';
import "./Tabela.css"

function Tabela() {
  return (
    <table>
      <thead>
        <tr>
          <th>HOSPITAL</th>
          <th>MÉDICO</th>
          <th class="last-column">HORÁRIO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HOSPITAL</td>
          <td>MÉDICO</td>
          <td class="last-column">HORÁRIO</td>
        </tr>
        <tr>
          <td>HOSPITAL</td>
          <td>MÉDICO</td>
          <td class="last-column">HORÁRIO</td>
        </tr>
        <tr>
          <td>HOSPITAL</td>
          <td>MÉDICO</td>
          <td class="last-column">HORÁRIO</td>
        </tr>
        <tr>
          <td>HOSPITAL</td>
          <td>MÉDICO</td>
          <td class="last-column">HORÁRIO</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tabela;
