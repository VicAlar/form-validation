import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
};

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.error};
    `}
`;

export const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

export const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}
`;

export const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colores.exito};
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colores.error};
    `}
`;

export const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0 30px rgba(163, 163, 163, 0.4);
  }

  &:invalid {
    border: 3px solid ${colores.error} !important;
  }

  &:required:valid {
    border: 3px solid ${colores.exito} !important;
  }

  &:required:invalid ~ ${LeyendaError} {
    display: block;
  }

  &:valid ~ ${IconoValidacion} {
    display: block;
  }

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

export const ContenedorTerminos = styled.div`
  grid-column: span 2;

  input {
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

export const ContenedorBoton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: span 2;
`;

export const Boton = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0 30px rgba(163, 163, 163, 1);
  }
`;

export const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
  display: none;
`;

export const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: #f66060;
  padding: 0 15px;
  border-radius: 5px;
  grid-column: span 2;
  display: none;

  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;
