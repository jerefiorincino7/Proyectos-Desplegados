import { createContext, useEffect, useState } from "react";

const THEME_STORAGE_KEY = "wa-theme"

export const ThemeContext = createContext({
    theme: "light",
    setTheme: () => { },
    toggleTheme: () => { },
})

function getInitialTheme() {
    try {
        const saved = localStorage.getItem(THEME_STORAGE_KEY)
        if (saved === "light" || saved === "dark") return saved
    } catch (error) {
        
    }
    return "light"
}

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme)

    
    useEffect(() => {
        document.documentElement.dataset.theme = theme
        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme)
        } catch (error) {
        
        }
    }, [theme])

    function toggleTheme() {
        setTheme((previousTheme) => previousTheme === "light" ? "dark" : "light")
    }

    const providerValues = {
        theme: theme,
        setTheme: setTheme,
        toggleTheme: toggleTheme,
    }
    return (
        <ThemeContext.Provider value={providerValues}>
            {children}
        </ThemeContext.Provider>
    )
}
