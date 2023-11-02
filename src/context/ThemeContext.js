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
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, selectedFont, changeFont}}>
            {children}
        </ThemeContext.Provider>
    )
};