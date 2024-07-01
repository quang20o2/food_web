import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '80%',
          margin: 'auto'
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default App
