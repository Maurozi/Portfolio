import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import ChatbotPage from './pages/Chatbot-page.jsx'
import YoungVotersPage from './pages/YoungVoters-page.jsx'
import CodeExchangePage from './pages/CodeExchange-page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/chatbot' element={<ChatbotPage />} />
        <Route path='/projects/young-voters' element={<YoungVotersPage />} />
        <Route path='/projects/code-exchange' element={<CodeExchangePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
