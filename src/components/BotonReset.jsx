import React from "react";

const BotonReset = ({reiniciarJuego}) => {
  return (
    <button className="boton-reset" onClick={reiniciarJuego}>
      REINICIAR PUNTOS
    </button>
  );
};

export default BotonReset;
