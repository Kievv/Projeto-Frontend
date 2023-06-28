const CampoTexto = (props) => {
  return (
    <>
      <div className="container">
        <label className={`campo-${props.campo}`}>
          {props.label}
          <input
            type={props.type}
            name={props.name}
            {...props.register(props.name, props.validateSchema)}
            id={props.item}
            className={props.campo}
            placeholder={props.placeholder}
          />
        </label>
      </div>
    </>
  );
};

export default CampoTexto;
