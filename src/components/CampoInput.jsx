import {
  GrupoInput,
  IconoValidacion,
  Input,
  Label,
  LeyendaError,
} from "../elements/Formulario.Elements";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const CampoInput = ({
  label,
  placeholder,
  type,
  name,
  expresionRegular,
  leyendaError,
  estado,
  setEstado,
  funcion,
}) => {
  const { campo, valido } = estado;

  const onChange = (e) => {
    setEstado({
      ...estado,
      campo: e.target.value,
    });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(campo)) {
        setEstado({
          ...estado,
          valido: "true",
        });
      } else {
        setEstado({
          ...estado,
          valido: "false",
        });
      }
    }
    if (funcion) {
      funcion();
    }
  };

  return (
    <div>
      <Label valido={valido} htmlFor="">
        {label}
      </Label>
      <GrupoInput>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          value={campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={valido}
        />
        <IconoValidacion
          icon={valido === "true" ? faCheckCircle : faTimesCircle}
          valido={valido}
        />
      </GrupoInput>
      <LeyendaError valido={valido}>{leyendaError}</LeyendaError>
    </div>
  );
};

export default CampoInput;
