import { DarkModeProvider } from './context/DarkMode'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactMe from './pages/Contact'
import Home from './pages/Home'
import Seminaire from './pages/Seminaire'
import Salon from './pages/Salon'
import FlotAgenda from './components/FlotAgenda'

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <FlotAgenda />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactMe />} />
          <Route path='/seminairesinternational' element={<Seminaire />} />
          <Route path='/seminairesnationaux' element={<Seminaire />} />
          <Route path='/salonsinternational' element={<Salon />} />
          <Route path='/salonsnationaux' element={<Salon />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  )
}
export default App
