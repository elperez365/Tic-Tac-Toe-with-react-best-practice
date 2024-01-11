import { WINNING_COMBINATIONS } from "../data/data";

export const updateGameBoardData = (gameTurns, gameBoardData) => {
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoardData[row][col] = player;
  }
};

export const calculateWinner = (gameBoardData, gameTurns) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoardData[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoardData[combination[1].row][combination[1].col];
    const thirdSquareSymbol =
      gameBoardData[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
      return winner;
    }
    if (gameTurns.length === 9) {
      return "draw";
    }
  }
};

export const deriveActivePlayer = (turns) => {
  return turns[0]?.player === "X" ? "O" : "X";
};
