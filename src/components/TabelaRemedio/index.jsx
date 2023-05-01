import React from 'react';
import './TabelaRemedio.css';

const TabelaRemedio = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.exibirCheckbox && (
            <td>
              <input type="checkbox" name="deletar" id="check" className="checkbox" />
            </td>
          )}
          <td>{props.remedio}</td>
          <td>{props.dose}</td>
          <td>{props.miligramas}</td>
          <td>{props.hor1}</td>
          <td>{props.hor2}</td>
          <td className="last-column">{props.hor3}</td>
        </tr>
      </thead>
    </table>
  );
};

export default TabelaRemedio;
