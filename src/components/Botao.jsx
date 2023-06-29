import './Button.css'

const Botao = (props) => {
  return (
    <>
      <button onClick={props.handleClick} type={props.type} className={`${props.classe}`}>
        {props.botao}
      </button>
    </>
  );
};

export default Botao;
