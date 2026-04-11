import { AnimatePresence, motion as Motion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ChatbotPage from './pages/Chatbot-page.jsx'
import YoungVotezPage from './pages/YoungVotez-page.jsx'
import CodeExchangePage from './pages/CodeExchange-page.jsx'

function PageTransition({ children }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -16, filter: 'blur(3px)' }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </Motion.div>
  )
}

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageTransition><Home /></PageTransition>} />
        <Route path='/projects/chatbot' element={<PageTransition><ChatbotPage /></PageTransition>} />
        <Route path='/projects/young-votez' element={<PageTransition><YoungVotezPage /></PageTransition>} />
        <Route path='/projects/code-exchange' element={<PageTransition><CodeExchangePage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}
