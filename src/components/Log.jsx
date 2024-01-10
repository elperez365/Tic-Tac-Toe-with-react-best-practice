export default function Log({ turns: log }) {
  return (
    <ol id="log">
      {log?.map((entry) => (
        <li key={`${entry.square.row} ${entry.square.col}`}>
          {entry.player} selected {entry.square.row},{entry.square.col}
        </li>
      ))}
    </ol>
  );
}
