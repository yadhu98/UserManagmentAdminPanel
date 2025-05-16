import { createContext,useState,useEffect, type ReactNode } from 'react'
export type themeTypes = {
    isdark : boolean,
    toggleDark : ()=> void
}
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<themeTypes | null>(null)

export const ThemeProvider = ({children} : {children : ReactNode}) => {

    const [isdark,setisDark] = useState<boolean>(false)
    useEffect(() => {
        if (isdark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }, [isdark]);

    const toggleDark = ():void =>{
            setisDark((prev) => !prev)
    }
  return (
    <ThemeContext.Provider value={{isdark,toggleDark}}>
        {children}
    </ThemeContext.Provider>
  )
}

