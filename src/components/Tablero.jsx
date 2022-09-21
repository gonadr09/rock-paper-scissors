import React, { useState, useEffect } from "react";
import BotonOpcion from "./BotonOpcion";
import BotonReset from "./BotonReset";
import Score from "./Score";
import TableroInterno from "./TableroInterno";

// el primero (la clave del obj) le gana al segundo (el valor del obj)
const vencedores = {
  "✊": "✌",
  "🖐": "✊",
  "✌": "🖐",
};

const opciones = Object.keys(vencedores);

const numeroAleatorio = () => {
    return Math.floor(Math.random() * opciones.length);
  };

function Tablero() {
  const [resultadoTexto, setResultadoTexto] = useState("-");
  const [eleccionIA, setEleccionIA] = useState("?");
  const [eleccionJugador, setEleccionJugador] = useState("?");
  const [scoreIA, setScoreIA] = useState(0);
  const [scoreJugador, setScoreJugador] = useState(0);
  const [reiniciar, setReiniciar] = useState(false);

  const comprobarGanador = (opcionJugador) => {
    const opcionPC = opciones[numeroAleatorio()];
    const resultado = logicaJuego(opcionJugador, opcionPC);
    setEleccionIA(opcionPC);
    setResultadoTexto(resultado);
    setEleccionJugador(opcionJugador);
  };

  const logicaJuego = (opcionJugador, opcionPC) => {
    if (vencedores[opcionJugador] === opcionPC) {
      setScoreJugador(scoreJugador + 1);
      return "GANASTE";
    } else if (opcionJugador === opcionPC) {
      return "EMPATE";
    } else {
      setScoreIA(scoreIA + 1);
      return "PERDISTE";
    }
  };

  const reiniciarJuego = () => {
    setReiniciar(true);
  };

  useEffect(() => {
    setResultadoTexto("-");
    setEleccionIA("?");
    setEleccionJugador("?");
    setScoreIA(0);
    setScoreJugador(0);
    setReiniciar(false);
  }, [reiniciar]);

  return (
    <div className="tablero">
      <Score scoreIA={scoreIA} scoreJugador={scoreJugador} />
      <h1>PIEDRA, PAPEL o TIJERA</h1>
      <TableroInterno
        eleccionIA={eleccionIA}
        resultadoTexto={resultadoTexto}
        eleccionJugador={eleccionJugador}
      />
      <p>Seleccioná una opción para jugar:</p>
      <div>
        {opciones.map((opcion, index) => {
          return (
            <BotonOpcion
              key={index}
              opcionTexto={opcion}
              comprobarGanador={comprobarGanador}
            />
          );
        })}
      </div>
      <BotonReset reiniciarJuego={reiniciarJuego} />
    </div>
  );
}

export default Tablero;
