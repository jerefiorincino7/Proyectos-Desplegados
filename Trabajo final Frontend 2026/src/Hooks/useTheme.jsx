import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

function useTheme() {
    const { theme, setTheme, toggleTheme } = useContext(ThemeContext)
    return {
        theme: theme,
        isDark: theme === "dark",
        setTheme: setTheme,
        toggleTheme: toggleTheme,
    }
}

export default useTheme
