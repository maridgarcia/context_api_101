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

export default Main;