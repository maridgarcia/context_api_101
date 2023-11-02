## Checklist REACT CONTEXT API

- Criando o context
    - Criar um pasta <code>context</code> dentro de <code>src</code>
    - Dentro de <code>context</code>, criar o arquivo <code>Context.js</code>
    ```
    // src/context/Context.js

    import { createContext, useContext, useState } from "react";

    export const ThemeContext = createContext();

    export const useTheme = () => {
        return useContext(ThemeContext);
    }

    export const ThemeProvider = ({ children }) => {
        const [isDarkMode, setDarkMode] = useState(false);
        const [selectedFont, setFont] = useState("Arial");

        const toggleTheme = () => {
            setDarkMode((prevMode) => !prevMode)
        }

        const changeFont = (font) => {
            setFont(font)
        }

        return (
            /* Objetos acessíveis por 
            todos os componentes 
            (isDarkMode, toggleTheme, etc...) */
            <ThemeContext.Provider value={{ 
                    isDarkMode,
                    toggleTheme,
                    selectedFont,
                    changeFont
                }}>
                {children}
            </ThemeContext.Provider>
        )
    };
    ```

    ```
    // App.js
    import { ThemeProvider } from "./context/ThemeContext";
    import Main from "./components/Main";
    import "./App.css";

    function App() {
        return (
            /* 
            O que estiver encapsulado 
            dentro do ThemeProvider poderá acessar 
            o contexto da aplicação
            */
            <ThemeProvider>
                <Main />
            </ThemeProvider>
        )
    }
    export default App;
    ```

    ```
    // Main.jsx
    import React from "react";
    import { useTheme } from "../context/ThemeContext";
    import FontSelector from "./FontSelector";

    const Main = () => {
        const { isDarkMode, toggleTheme } = useTheme()

        return (
            <div className={isDarkMode ? "dark-mode" : "light-mode"}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FontSelector />
            </div>
        )
    }
    ```
    ```
    // FontSelector.jsx

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
    ```
