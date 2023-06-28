const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick} type={props.type} className={`${props.classe}`}>
        {props.botao}
      </button>
    </>
  );
};

export default Button;
