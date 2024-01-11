import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { initialGameBoard } from "./data/data";
import {
  calculateWinner,
  deriveActivePlayer,
  updateGameBoardData,
} from "./utils/functions";
import GameOver from "./components/GameOver";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let gameBoardData = [...initialGameBoard.map((array) => [...array])];
  updateGameBoardData(gameTurns, gameBoardData);
  const winner = calculateWinner(gameBoardData, gameTurns);
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prev) => {
      return [
        {
          square: { row: rowIndex, col: colIndex },
          player: deriveActivePlayer(prev),
        },
        ...prev,
      ];
    });
  };

  const handleRestartGame = () => {
    setGameTurns([]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={deriveActivePlayer(gameTurns) === "X"}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            isActive={deriveActivePlayer(gameTurns) === "O"}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        {winner && <GameOver winner={winner} onRestart={handleRestartGame} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoardData} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
