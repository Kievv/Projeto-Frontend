import './CampoTexto.css'

const CampoTexto = (props) => {
  return (
    <>
      <div className="container-campoTexto">
        <label className="campo-texto-label">
          {props.label}
          <input
            type={props.type}
            name={props.name}
            {...props.register(props.name, props.validateSchema)}
            id={props.item}
            className="campoTexto-input"
            placeholder={props.placeholder}
          />
        </label>
      </div>
    </>
  );
};

export default CampoTexto;
