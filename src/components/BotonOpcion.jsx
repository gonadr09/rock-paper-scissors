import React from "react";

function BotonOpcion({ opcionTexto, comprobarGanador }) {
  return (
    <button
      className="boton-juego"
      onClick={() => comprobarGanador(opcionTexto)}
    >
      {opcionTexto}
    </button>
  );
}

export default BotonOpcion;
