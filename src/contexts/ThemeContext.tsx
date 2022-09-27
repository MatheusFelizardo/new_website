import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

interface ThemeContextData {
  toggleTheme(x?: string): void;
  theme: Theme;
}

interface Theme {
  name: string;
  colors: {
    primary: string,
    black: string,
    background: string,
    text: string
  }
}

const light = {
  name: 'light',
  colors: {
    primary: 'var(--blue-500)',
    black: '#333',
    background: '#f1f1f1',
    text: 'rgba(0, 0, 0, 0.85)'
  }
}

const dark = {
  name: 'dark',
  colors: {
    primary: 'var(--blue-500)',
    black: '#333',
    background: '#111d2c',
    text: 'white'
  }
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {

  const [theme, setTheme] = useState<Theme>(light);

  const toggleTheme = useCallback((selected: string) => {
    if(selected) {
      if (selected === 'dark'){
        setTheme(dark);
        localStorage.setItem('theme', 'dark')
      } else {
        localStorage.setItem('theme', 'light')
        setTheme(light);
      }
      return
    }

    if (theme.name === 'dark'){
      setTheme(light);
      localStorage.setItem('theme', 'light')

      return
    }

    localStorage.setItem('theme', 'dark')
    setTheme(dark);
  }, [theme]);

  useEffect(()=> {
    const storagedTheme = localStorage.getItem('theme')
    if (storagedTheme) {
      if (storagedTheme === 'dark'){
        setTheme(dark);
        return
      }
      setTheme(light);
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;