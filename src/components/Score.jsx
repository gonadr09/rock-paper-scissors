import React from "react";

const Score = ({scoreIA, scoreJugador}) => {
  return (
    <div className="score">
      <p>
        Puntos IA: <span>{scoreIA}</span>
      </p>
      <p>
        Puntos jugador: <span>{scoreJugador}</span>
      </p>
    </div>
  );
}

export default Score;
