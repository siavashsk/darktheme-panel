import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

const ThemeContext = createContext(undefined);

const DARK = "DARK";
const LIGHT = "LIGHT";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({ mode: LIGHT });

    const toggleThemeMode = useCallback(() => {
        setTheme((prevTheme) => ({
            ...prevTheme,
            mode: prevTheme.mode === LIGHT ? DARK : LIGHT,
        }));
    }, []);

    const value = useMemo(
        () => ({ toggleThemeMode, theme }),
        [theme, toggleThemeMode]
    );
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined)
        throw new Error("useTheme must be within ThemeProvider!");

    return context;
};

export { ThemeProvider, DARK, LIGHT, useTheme };
