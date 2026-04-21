import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import RegistroPage from './pages/RegistroPage'
import ChatPage from './pages/ChatPage'
import ConfiguracionPage from './pages/ConfiguracionPage'
import GruposPage from './pages/GruposPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/mensajes" element={<ChatPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
        <Route path="/grupos" element={<GruposPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
