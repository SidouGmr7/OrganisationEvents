import { useState, createContext } from 'react'

const DarkMode = createContext()

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(true)
  const [colapse, setColapse] = useState(false)
  const changeMode = () => {
    setDark(!dark)
  }
  const colapsed = () => {
    setColapse(!colapse)
  }
  return (
    <DarkMode.Provider
      value={{
        dark,
        colapse,
        changeMode,
        colapsed,
      }}>
      {children}
    </DarkMode.Provider>
  )
}

export default DarkMode
