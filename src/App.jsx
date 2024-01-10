import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

let activePlayer = (prev) => {
  if (prev.length === 0) {
    return "X";
  }
  return prev[0].player === "X" ? "O" : "X";
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  console.log(activePlayer(gameTurns));
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prev) => {
      console.log(activePlayer(prev));
      return [
        {
          square: { row: rowIndex, col: colIndex },
          player: activePlayer(prev),
        },
        ...prev,
      ];
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer(gameTurns) === "X"}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            isActive={activePlayer(gameTurns) === "O"}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
