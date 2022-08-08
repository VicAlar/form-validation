import {
  Boton,
  ContenedorBoton,
  ContenedorTerminos,
  Form,
  Label,
  MensajeError,
  MensajeExito,
} from "../elements/Formulario.Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Inputs from "./Inputs";

const Formulario2 = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputData = Object.fromEntries(formData);
    console.log(inputData);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Inputs
        label="Usuario"
        placeholder="Ingresa tu usuario"
        type="text"
        name="usuario"
        leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo"
        expresionRegular="[a-zA-Z0-9_-]{4,16}"
      />
      <Inputs
        label="Nombre"
        placeholder="Ingresa tu Nombre"
        type="text"
        name="nombre"
        leyendaError="El nombre solo puede contener letras y espacios"
        expresionRegular="[a-zA-ZÀ-ÿ\s]{3,40}"
      />
      <Inputs
        label="Correo"
        placeholder="Ingresa tu correo"
        type="email"
        name="correo"
        leyendaError="El correo no es valido"
        expresionRegular="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
      />
      <Inputs
        label="Teléfono"
        placeholder="Ingresa tu telefono"
        type="tel"
        name="telefono"
        leyendaError="El numero de telefono solo puede contener numeros"
        expresionRegular="[0-9]{7,14}"
      />
      <ContenedorTerminos>
        <Label>
          <input type="checkbox" name="terminos" id="terminos" />
          Acepto los Terminos y Condiciones
        </Label>
      </ContenedorTerminos>
      <MensajeError>
        <p>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <b>Error:</b> Por favor rellene el formulario correctamente
        </p>
      </MensajeError>
      <ContenedorBoton>
        <Boton type="submit">Enviar Formulario</Boton>
        <MensajeExito>El formulario se envió exitosamente</MensajeExito>
      </ContenedorBoton>
    </Form>
  );
};

export default Formulario2;
