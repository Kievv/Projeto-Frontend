import React from 'react';
import "./Tabela.css"

function Tabela() {
  return (
    <table>
      
      <tbody>
        <tr>
          <td>HORARIO</td>
          <td>Linha 1, Coluna 2</td>
          <td>Linha 1, Coluna 3</td>
        </tr>
        <tr>
          <td>Linha 2, Coluna 1</td>
          <td>Linha 2, Coluna 2</td>
          <td>Linha 2, Coluna 3</td>
        </tr>
        <tr>
          <td>Linha 3, Coluna 1</td>
          <td>Linha 3, Coluna 2</td>
          <td>Linha 3, Coluna 3</td>
        </tr>
        <tr>
          <td>Linha 4, Coluna 1</td>
          <td>Linha 4, Coluna 2</td>
          <td>Linha 4, Coluna 3</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tabela;
