const Button = (props) => {
  return (
    <>
      <button className={`${props.classe}`}>{props.botao}</button>
    </>
  );
};

export default Button;
