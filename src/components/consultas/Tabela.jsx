function Tabela(props) {
  return (
    <table>
      <thead>
        <tr>
          {props.exibirCheckbox && ( // Verifica se deve exibir os checkboxes
            <td>
              <input type="checkbox" className="checkbox" />
            </td>
          )}

          <td>{props.hospital}</td>
          <td>{props.medico}</td>
          <td className="last-column">{props.horario}</td>
        </tr>
      </thead>
    </table>
  );
}

export default Tabela;
