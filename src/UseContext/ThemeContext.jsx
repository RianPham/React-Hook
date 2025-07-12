import { useState, createContext } from "react";

const ThemeContext = createContext()

function ThemeProvider({children}) {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const values = {
    theme, 
    toggleTheme
  }
  return(
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}
export {ThemeContext, ThemeProvider}




