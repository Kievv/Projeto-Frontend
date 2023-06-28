const TabelaExame = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.exibirCheckbox && (
            <td>
              <input type="checkbox" name="deletar" id="check" className="checkbox" />
            </td>
          )}
          <td>{props.exame}</td>
          <td>{props.clinica}</td>
          <td>{props.local}</td>
          <td>{props.dia}</td>
          <td className="last-column">{props.horario}</td>
        </tr>
      </thead>
    </table>
  );
};

export default TabelaExame;
