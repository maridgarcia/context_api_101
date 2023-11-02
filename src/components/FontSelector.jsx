import React from "react";
import { useTheme } from "../context/ThemeContext";

function FontSelector() {
  const { selectedFont, changeFont } = useTheme();

  const handleFontChange = (event) => {
    changeFont(event.target.value);
  };

  return (
    <div>
      <h2>Selecione uma fonte:</h2>
      <select value={selectedFont} onChange={handleFontChange}>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Lucida Console">Lucida Console</option>
      </select>
      <p style={{ fontFamily: selectedFont }}>
        Este é um exemplo de texto com a fonte: {selectedFont}
      </p>
    </div>
  );
}

export default FontSelector;
