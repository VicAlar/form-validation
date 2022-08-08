import { useState } from "react";
import CampoInput from "./CampoInput";
import {
  Form,
  Boton,
  ContenedorBoton,
  ContenedorTerminos,
  Label,
  MensajeError,
  MensajeExito,
} from "../elements/Formulario.Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Formulario = () => {
  const [usuario, setUsuario] = useState({
    campo: "",
    valido: null,
  });
  const [nombre, setNombre] = useState({
    campo: "",
    valido: null,
  });
  const [password, setPassword] = useState({
    campo: "",
    valido: null,
  });
  const [confirmarPassword, setConfirmarPassword] = useState({
    campo: "",
    valido: null,
  });
  const [correo, setCorreo] = useState({
    campo: "",
    valido: null,
  });
  const [telefono, setTelefono] = useState({
    campo: "",
    valido: null,
  });

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&;.#-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    correo: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
  };

  const validarPassword = () => {
    //Verificar que sea igual a la contraseña
    if (password.campo.length > 0) {
      if (password.campo === confirmarPassword.campo) {
        setConfirmarPassword({
          ...confirmarPassword,
          valido: "true",
        });
      } else {
        setConfirmarPassword({
          ...confirmarPassword,
          valido: "false",
        });
      }
    }
  };
  return (
    <Form>
      <CampoInput
        estado={usuario}
        setEstado={setUsuario}
        label="Usuario"
        placeholder="Ingresa tu usuario"
        type="text"
        name="usuario"
        leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo"
        expresionRegular={expresiones.usuario}
      />
      <CampoInput
        estado={nombre}
        setEstado={setNombre}
        label="Nombre"
        placeholder="Ingresa tu Nombre"
        type="text"
        name="nombre"
        leyendaError="El nombre solo puede contener letras y espacios"
        expresionRegular={expresiones.nombre}
      />
      <CampoInput
        estado={password}
        setEstado={setPassword}
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        type="password"
        name="password"
        leyendaError="La contraseña debe tener al menos 8 caracteres y debe contener al menos una letra mayuscula, una minuscula y un numero"
        expresionRegular={expresiones.password}
      />
      <CampoInput
        estado={confirmarPassword}
        setEstado={setConfirmarPassword}
        label="Confirmar Contraseña"
        placeholder="Ingresa tu contraseña"
        type="password"
        name="confirmar contraseña"
        leyendaError="Ambas contraseñas deben ser iguales"
        funcion={validarPassword}
      />
      <CampoInput
        estado={correo}
        setEstado={setCorreo}
        label="Correo"
        placeholder="Ingresa tu correo electronico"
        type="email"
        name="correo"
        leyendaError="Ingresa un correo valido"
        expresionRegular={expresiones.correo}
      />
      <CampoInput
        estado={telefono}
        setEstado={setTelefono}
        label="Teléfono"
        placeholder="Ingresa tu telefono"
        type="tel"
        name="telefono"
        leyendaError="El numero de telefono solo puede contener numeros"
        expresionRegular={expresiones.telefono}
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

export default Formulario;
