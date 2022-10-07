import { useState, createContext } from 'react'

const DarkMode = createContext()

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(true)
  const changeMode = () => {
    setDark(!dark)
  }
  return (
    <DarkMode.Provider
      value={{
        dark,
        changeMode,
      }}>
      {children}
    </DarkMode.Provider>
  )
}

export default DarkMode
