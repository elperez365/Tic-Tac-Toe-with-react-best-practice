export default function GameBoard({ onSelectSquare, board: gameboard }) {
  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={"row" + rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={"col" + colIndex}>
                <button
                  disabled={!!playerSymbol}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
