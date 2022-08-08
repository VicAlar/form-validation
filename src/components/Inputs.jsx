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

const Inputs = ({
  type,
  name,
  expresionRegular,
  leyendaError,
  label,
  placeholder,
}) => {
  return (
    <div>
      <Label htmlFor="">{label}</Label>
      <GrupoInput>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          pattern={expresionRegular}
          required
        />
        <LeyendaError>{leyendaError}</LeyendaError>
        <IconoValidacion icon={faCheckCircle} />
      </GrupoInput>
    </div>
  );
};

export default Inputs;
