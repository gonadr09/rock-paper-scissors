import React from "react";

const TableroInterno = ({ eleccionIA, resultadoTexto, eleccionJugador }) => {
  return (
    <div className="tablero-interno">
      <p>IA:</p>
      <h2>{eleccionIA}</h2>
      <h2 className={resultadoTexto}>{resultadoTexto}</h2>
      <p>Jugador:</p>
      <h2>{eleccionJugador}</h2>
    </div>
  );
};

export default TableroInterno;
