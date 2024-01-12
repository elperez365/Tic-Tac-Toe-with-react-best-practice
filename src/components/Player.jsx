import { useState } from "react";
import { FaEdit, FaRegSave } from "react-icons/fa";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            maxLength={8}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button className="button" onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? <FaRegSave /> : <FaEdit />}
      </button>
    </li>
  );
}
