import { DarkModeProvider } from './context/DarkMode'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactMe from './pages/Contact'

import Home from './pages/Home'
import Presentation from './pages/Presentation'

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactMe />} />
          <Route path='/seminairesnationaux' element={<Presentation />} />
          <Route path='/seminairesinternational' element={<Presentation />} />
          <Route path='/salonssnationaux' element={<Presentation />} />
          <Route path='/salonsinternational' element={<Presentation />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  )
}
export default App
