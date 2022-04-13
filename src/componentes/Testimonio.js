import React from "react";
import "../hojas-de-estilo/Testimonio.css"

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="Foto de Miguel"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> de {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">
          "{props.Testimonio}"
        </p>
      </div>
    </div>
  );
}
export default Testimonio;
