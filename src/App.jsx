import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

import { useState } from 'react'
import BackToTop from './components/BackToTop/BackToTop'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Box
        // maxWidth="xl"
        sx={{
          width: '80%',
          margin: 'auto'
        }}
      >
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </Box>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}

export default App
